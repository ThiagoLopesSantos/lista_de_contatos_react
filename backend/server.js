// Importação dos Módulos
const express = require('express')
const cors = require('cors')

// Inicializando a Aplicação express
const app = express()
const PORT = 4000

// Configurando Middleware
app.use(cors()) // Habilita CORS para todas as origens
app.use(express.json()) // Habilita o servidor para receber JSON no corpo das requisições

// Dados de Contatos (em memória)
let contacts = []

// Rota para Obter Todos os Contatos (Endpoint)
app.get('/contacts', (req, res) => {
  res.json(contacts) // Retorna a lista de contatos em formato JSON
})

// Rota para Adicionar um Novo Contato
let nextId = 0 // Próximo ID para novos contatos

app.post('/contacts', (req, res) => {
  const newContact = req.body

  const contactToAdd = {
    ...newContact,
    id: nextId++
  }

  contacts.push(contactToAdd)

  console.log('Novo contato adicionado:', contactToAdd)
  res.status(201).json(contactToAdd) // Retorna o contato adicionado com status 201 (Criado)
})

// Rota para editar um contato
app.put('/contacts/:id', (req, res) => {
  const contactId = req.params.id // Pegando o ID da URL
  const numberId = parseInt(contactId, 10) // Convertendo para número
  const updateData = req.body // Pegando os novos dados do body
  const findedIndex = contacts.findIndex((c) => c.id === numberId) // Encontrando o index do contato

  // Verificando  se o contato foi encontrado e garantindo que o ID original seja mantido
  if (findedIndex !== -1) {
    contacts[findedIndex] = { ...updateData, id: numberId }

    console.log('Contato atualizado:', contacts[findedIndex])
    res.json(contacts[findedIndex])
  } else {
    res.status(404).json({ message: 'Contato não encontrado.' })
  }
})

// Rota para remover um contato
app.delete('/contacts/:id', (req, res) => {
  const contactId = req.params.id
  const numberId = parseInt(contactId, 10)
  const oldContactList = contacts
  contacts = contacts.filter((c) => c.id !== numberId)

  if (oldContactList.length > contacts.length) {
    res.status(404).json({ message: 'Contato não encontrado para remoção.' })
  }
})

// Iniciando o Servidor
app.listen(PORT, () => {
  console.log(`Servidor backend rodando com sucesso na porta ${PORT}`)
  console.log(`Acesse em: http://localhost:${PORT}/contacts para testar`)
})
