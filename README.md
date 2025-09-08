# Agenda de Contatos - Frontend (React & TypeScript) 📞

![Badge de Status](https://img.shields.io/badge/status-online-brightgreen)

**[Clique aqui para ver a aplicação ao vivo!](https://lista-de-contatos-frontend.vercel.app/)**

## Sobre o Projeto

Este é o frontend da minha aplicação de Agenda de Contatos. O que começou como um projeto para praticar React e Redux evoluiu para uma interface de usuário completa e funcional, que se comunica com uma API backend dedicada para gerenciar os dados.

Esta aplicação foi desenhada para ser uma SPA (Single Page Application) moderna, reativa e com uma ótima experiência de usuário. Ela é a "face visível" do meu projeto full-stack, responsável por capturar as interações do usuário e conversar com o servidor.

➡️ **[Confira aqui o repositório do Backend (API)](https://github.com/ThiagoLopesSantos/lista_de_contatos_api)**

---

## ✨ Funcionalidades

* **Interface Reativa:** Construída com componentes React para atualizações de tela instantâneas.
* **Gerenciamento de Estado Centralizado:** Utiliza Redux Toolkit para um controle de estado previsível e escalável.
* **Comunicação Assíncrona:** Usa `asyncThunks` para lidar com as chamadas à API, tratando estados de carregamento e erro.
* **Roteamento:** Navegação entre a lista de contatos e o formulário de cadastro implementada com React Router.

---

## 🛠️ Tecnologias Utilizadas

* **React**
* **TypeScript**
* **Redux Toolkit**
* **React Router**
* **Styled-Components** para estilização
* **Vercel** para deploy e hospedagem

---

## 🚀 Minha Jornada de Aprendizado

Este projeto foi uma imersão profunda no ecossistema do React e no desenvolvimento frontend moderno. O maior desafio (e aprendizado) foi transformar uma aplicação que funcionava localmente em algo que pudesse ser publicado na web.

Nesta jornada, aprendi a:
* Estruturar e depurar um **processo de build de produção**, corrigindo erros de tipagem e linting que não apareciam no ambiente de desenvolvimento.
* Lidar com **Variáveis de Ambiente** (`.env`) para gerenciar diferentes URLs de API (local vs. produção), uma prática essencial em projetos reais.
* Depurar **problemas de deploy e roteamento** em plataformas como o Vercel, entendendo como a configuração de build e os `rewrites` impactam a aplicação final.
* Construir uma interface resiliente, que oferece feedback ao usuário durante os estados de carregamento e falha na comunicação com a API.

---

## 🔮 Próximos Passos

O plano é continuar evoluindo esta aplicação para torná-la ainda mais completa e segura. Os próximos grandes passos planejados são:

* **Implementar um Sistema de Login:** Criar rotas de autenticação (telas de login, cadastro de usuário) para que cada pessoa tenha sua própria agenda de contatos privada.
* **Integrar com um Banco de Dados SQL:** Conectar a um backend mais robusto com um banco de dados (como PostgreSQL) para garantir que os dados dos contatos sejam permanentes e não se percam.está pronta para consumir essa API mais robusta.

---

## ⚙️ Como Rodar Localmente

```bash
# Clone este repositório
# Instale as dependências
npm install

# Crie um arquivo .env.development na raiz e adicione a linha abaixo:
# REACT_APP_API_URL=http://localhost:4000

# Inicie a aplicação
npm start
```
> **Atenção:** É necessário que o [servidor da API](https://github.com/ThiagoLopesSantos/lista_de_contatos_api) esteja rodando localmente para que a aplicação funcione.
