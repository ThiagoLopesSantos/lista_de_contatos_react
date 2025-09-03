# 📇 Lista de Contatos

Aplicação desenvolvida em **React + TypeScript** durante o curso da [EBAC (Escola Britânica de Artes Criativas e Tecnologia)](https://ebaconline.com.br/), com foco em **Redux Toolkit, estilização modular e boas práticas de front-end**.  

O projeto simula uma **lista de contatos** que permite cadastrar, editar, excluir e filtrar contatos de forma prática e intuitiva.  

---

## ✨ Funcionalidades

- ➕ **Adicionar contato** com nome, e-mail, telefone e categoria.  
- 👀 **Visualizar contatos** em cartões dinâmicos e responsivos.  
- ✏️ **Editar informações** de contatos já cadastrados.  
- 🗑️ **Remover contatos** da lista.  
- 🔍 **Filtrar contatos** por categoria e/ou termo de busca.  

---

## 🖼️ Layout

### 🔹 Tela Inicial
![Tela inicial da aplicação](./docs/screenshot-home.png)

### 🔹 Adicionar Contato
![Formulário de cadastro de contato](./docs/screenshot-add.png)

### 🔹 Editar Contato
![Edição de contato existente](./docs/screenshot-edit.png)

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ **React** – construção da interface  
- 🟦 **TypeScript** – segurança de tipos e robustez do código  
- 🗂️ **Redux Toolkit** – gerenciamento de estado global  
- 💅 **Styled Components** – estilização modular e dinâmica  
- 🌐 **React Router DOM** – navegação entre páginas  
- 🔢 **IMask.js + react-imask** – máscaras em inputs (ex.: telefone)  

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, aprimorei habilidades importantes:

- **Gerenciamento de Estado Global com Redux Toolkit**  
  Uso de `createSlice`, `useSelector` e `useDispatch` para compartilhar dados entre componentes.  

- **Formulários controlados**  
  Construção de inputs dinâmicos que mantêm a interface sincronizada com o estado da aplicação.  

- **Máscaras em formulários**  
  Aplicação de máscaras com `IMask.js`, manipulando valores "limpos" para salvar no estado e valores formatados para exibir ao usuário.  

- **Tipagem avançada com enums**  
  Uso de `enum` no TypeScript para categorias, evitando erros de digitação e facilitando manutenção.  

- **Estilização avançada com Styled Components**  
  Props dinâmicas, `transient props` (`$active`) e aplicação de estilos em componentes de terceiros.  

- **Refatoração e depuração**  
  Organização do código, simplificação de lógicas de filtragem e resolução de bugs relacionados à tipagem e renderização.  

---

## 📂 Estrutura do Projeto
```bash
src/
├── components/ # Componentes reutilizáveis
├── containers/ # Seções principais (Header, Lista de Contatos, etc)
├── store/ # Redux Toolkit (slices e store)
├── styles/ # Estilos globais, temas e variáveis
└── App.tsx # Componente raiz
```
---
👨‍💻 Autor

Desenvolvido por Thiago Lopes 🚀

LinkedIn: www.linkedin.com/in/thiago-lopes-front-end

---

## 🚀 Como executar

```bash
# Clone o repositório
git clone https://github.com/ThiagoLopesSantos/lista_de_contatos_react.git

# Acesse a pasta
cd lista_de_contatos_react

# Instale as dependências
npm install

# Rode o projeto
npm start
```
Aplicação disponível em: http://localhost:3000



