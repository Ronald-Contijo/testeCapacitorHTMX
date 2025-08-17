# 🐴 NotasHTMX

Aplicativo simples para criação e gerenciamento de notas, desenvolvido com **Capacitor**, **HTMX** e **Vanilla JS**.  
Compatível com Android como PWA ou app nativo.
Feito pra práticar.

---

## 📸 Pré-visualizações

### Inserção de notas
![Tela de inserção](docs/editar.png)

### Tela inicial
![Tela inicial](docs/inicial.png)

> Substitua os caminhos acima (`docs/images/...`) pelas imagens reais do projeto.

---

## 🚀 Funcionalidades

- Criar, visualizar e editar notas  
- Da pra ditar a nota falando
- Interface minimalista e responsiva  
- Integração com Capacitor para Android  
- Ícone di cavalo 🐴  

---

## 📂 Estrutura do projeto

- `www/` → Código principal em HTML, JS e assets  
- `android/` → Projeto Android gerado pelo Capacitor  
- `capacitor.config.json` → Configurações do app  
- `manifest.json` → Configurações PWA  

---

## 🛠️ Instalação e execução

### Pré-requisitos
- [Node.js](https://nodejs.org/) (>= 20)  
- [Capacitor CLI](https://capacitorjs.com/docs/cli)  

### Passos
```bash
# Instalar dependências
npm install

# Rodar no navegador (PWA)
npx cap serve

# Build para Android
npx cap sync android
npx cap open android
