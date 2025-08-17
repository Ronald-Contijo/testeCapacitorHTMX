import { NotesDB } from './db.js';

const $ = sel => document.querySelector(sel);

async function renderList() {
  const notes = await NotesDB.list();
  const list = $('#notesList');
  const empty = $('#emptyState');
  if (!list) return;

  list.innerHTML = '';

  if (!notes.length) {
    if (empty) empty.classList.remove('hidden');
    return;
  }
  if (empty) empty.classList.add('hidden');

  for (const n of notes) {
    const item = document.createElement('div');
    item.className = 'p-3 bg-white rounded-xl border border-slate-200';
    const date = new Date(n.updatedAt).toLocaleString();
    item.innerHTML = `
      <div class="flex items-start gap-3">
        <div class="flex-1">
          <h3 class="font-medium">${escapeHTML(n.title || '(sem título)')}</h3>
          <p class="text-sm text-slate-600 line-clamp-2">${escapeHTML(n.content || '')}</p>
          <p class="mt-1 text-xs text-slate-400">${date}</p>
        </div>
        <div class="flex flex-col gap-2">
          <button class="px-2 py-1 border rounded-lg text-sm"
                  onclick="app.showForm('${n.id}')">Editar</button>
          <button class="px-2 py-1 border border-red-500 text-red-600 rounded-lg text-sm"
                  onclick="app.deleteNote('${n.id}')">Excluir</button>
        </div>
      </div>
    `;
    list.appendChild(item);
  }
}

function escapeHTML(s) {
  return (s || '').replace(/[&<>"']/g, m => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[m]));
}

async function showList() {
  await htmx.ajax('GET', 'partials/notes_list.html', { target: '#main', swap: 'innerHTML' });
}

async function showForm(id = null) {
  // carrega o formulário
  await htmx.ajax('GET', 'partials/note_form.html', { target: '#main', swap: 'innerHTML' });
  // se for edição, preenche
  if (id) {
    const n = await NotesDB.get(id);
    if (n) {
      $('#noteId').value = n.id;
      $('#title').value = n.title || '';
      $('#content').value = n.content || '';
      $('#deleteBtn')?.classList.remove('hidden');
    }
  } else {
    $('#deleteBtn')?.classList.add('hidden');
  }
}

async function saveNote(ev) {
  ev.preventDefault();
  const id = $('#noteId').value || `note-${Date.now()}-${Math.floor(Math.random()*100000)}`;
  const title = $('#title').value.trim();
  const content = $('#content').value;

  await NotesDB.upsert({ id, title, content });
  await showList();
  await renderList();
}

async function deleteNote(id) {
  if (!confirm('Excluir esta nota?')) return;
  await NotesDB.remove(id);
  await renderList();
}

async function deleteCurrentNote() {
  const id = $('#noteId').value;
  if (!id) return;
  await deleteNote(id);
  await showList();
}

async function showSettings() {
  await htmx.ajax('GET', 'partials/settings.html', { target: '#main', swap: 'innerHTML' });
}

async function exportJSON() {
  const data = await NotesDB.list();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `notas-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function importJSON(file) {
  if (!file) return;
  const text = await file.text();
  const list = JSON.parse(text);
  if (!Array.isArray(list)) {
    alert('Arquivo inválido.');
    return;
  }
  await NotesDB.bulkImport(list);
  alert('Importado com sucesso.');
  await showList();
  await renderList();
}

// integra com htmx: toda vez que conteúdo novo chegar ao #main,
// se existir #notesList, renderiza; se houver #noteForm, só garante botões etc.
document.body.addEventListener('htmx:load', () => {
  if ($('#notesList')) renderList();
});

window.app = {
  showList, showForm, saveNote,
  deleteNote, deleteCurrentNote,
  showSettings, exportJSON, importJSON,
  renderList
};
