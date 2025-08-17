// db.js — wrapper simples para IndexedDB (sem libs)
const DB_NAME = 'notesdb';
const DB_VERSION = 1;
const STORE_NOTES = 'notes';

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NOTES)) {
        const store = db.createObjectStore(STORE_NOTES, { keyPath: 'id' });
        store.createIndex('updatedAt', 'updatedAt', { unique: false });
        store.createIndex('title', 'title', { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function withStore(mode, fn) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NOTES, mode);
    const store = tx.objectStore(STORE_NOTES);
    const result = fn(store);
    tx.oncomplete = () => resolve(result);
    tx.onerror = () => reject(tx.error);
  });
}

export const NotesDB = {
  async list() {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NOTES, 'readonly');
      const store = tx.objectStore(STORE_NOTES);
      const req = store.getAll();
      req.onsuccess = () => {
        const arr = req.result || [];
        arr.sort((a, b) => b.updatedAt - a.updatedAt);
        resolve(arr);
      };
      req.onerror = () => reject(req.error);
    });
  },

  async get(id) {
    return withStore('readonly', store => store.get(id))
      .then(req => new Promise((res, rej) => {
        req.onsuccess = () => res(req.result || null);
        req.onerror = () => rej(req.error);
      }));
  },

  async upsert(note) {
    note.updatedAt = Date.now();
    return withStore('readwrite', store => store.put(note));
  },

  async remove(id) {
    return withStore('readwrite', store => store.delete(id));
  },

  async bulkImport(list) {
    return withStore('readwrite', store => {
      list.forEach(n => {
        if (!n.id) n.id = crypto.randomUUID();
        if (!n.updatedAt) n.updatedAt = Date.now();
        store.put(n);
      });
    });
  }
};
