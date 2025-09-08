# Agenda de Contatos Full-Stack: Uma Jornada de Evolução 📞

![Badge de Status do Projeto](https://img.shields.io/badge/status-funcional%20localmente-brightgreen)

Olá! Bem-vindo(a) ao meu projeto de Agenda de Contatos. O que começou como um exercício focado em React e gerenciamento de estado evoluiu para uma aplicação **Full-Stack** completa, e este repositório é o registro dessa jornada.

---

## 🚀 A Evolução do Projeto: De SPA a Full-Stack

Inicialmente, este projeto foi construído como uma **SPA (Single Page Application)** puramente frontend. Toda a lógica de adicionar, editar e remover contatos era gerenciada no estado do navegador, utilizando Redux para controlar os dados. Era uma ótima forma de praticar React e TypeScript.

> *Você pode conferir a versão original, puramente frontend, na branch [`versao-frontend-only`](https://github.com/ThiagoLopesSantos/lista_de_contatos_react/tree/versao-frontend-only).*

Percebi que, para tornar a aplicação mais robusta e "real", era preciso dar o próximo passo: desacoplar a gestão dos dados do cliente. Foi aí que decidi construir uma **API RESTful dedicada** para ser o cérebro da aplicação.

A branch `main` agora reflete essa nova arquitetura, onde o frontend (cliente) consome os dados de um backend (servidor) que construí com **Node.js e Express**. Essa mudança me permitiu implementar um ciclo **CRUD** (Create, Read, Update, Delete) completo e funcional, simulando como as aplicações modernas funcionam na prática.

---

## ✨ Funcionalidades Atuais

* **Listagem Dinâmica:** Os contatos são buscados diretamente da API ao carregar a página.
* **Criação Persistente:** Novos contatos são enviados e salvos no servidor.
* **Edição e Remoção:** As atualizações e exclusões são refletidas no servidor, garantindo a integridade dos dados.
* **Filtragem e Busca:** Mecanismos reativos para encontrar contatos específicos.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend (Cliente)**
* **React** e **TypeScript** para uma base de código robusta e tipada.
* **Redux Toolkit** para gerenciar o estado global e as chamadas assíncronas para a API (`asyncThunks`).
* **React Router** para a navegação entre as páginas de listagem e cadastro.
* **Styled-Components** para a estilização.

### **Backend (Servidor)**
* **Node.js** e **Express.js** para a construção da API RESTful.
* **CORS** para a comunicação segura entre o cliente e o servidor.

---

## 🚀 Como Rodar o Projeto Localmente

Para vivenciar a experiência full-stack, é preciso rodar as duas partes do projeto simultaneamente.

### **1. Iniciando o Backend (Servidor da API)**

```bash
# Navegue até a pasta do backend
cd backend

# Instale as dependências
npm install

# Inicie o servidor
node server.js
```
> O servidor estará rodando em `http://localhost:4000`.

### **2. Iniciando o Frontend (Aplicação React)**

```bash
# Em um NOVO terminal, navegue até a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie a aplicação
npm start
```
> A aplicação estará disponível no seu navegador em `http://localhost:3000`.

---