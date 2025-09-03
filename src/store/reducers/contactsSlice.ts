import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import { Category } from '../../utils/enums/Contact'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: [
    {
      id: 1,
      category: Category.FAMILIA,
      name: 'Gustavo Santos',
      email: 'gustavo@gmail.com',
      phone: '(21) 9 9709-0979'
    },
    {
      id: 2,
      category: Category.AMIGOS,
      name: 'Emanuely Versalles',
      email: 'manu.vs@gmail.com',
      phone: '(21) 9 8998-8998'
    },
    {
      id: 3,
      category: Category.TRABALHO,
      name: 'Rafael Bruno',
      email: 'r.bruno@gmail.com',
      phone: '(21) 9 8075-5708'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contact) => contact.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contactExists = state.itens.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (contactExists) {
        alert('Contato já cadastrado!')
      } else {
        const lastContact = state.itens[state.itens.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.itens.push(newContact)
      }
    }
  }
})

export const { remove, edit, register } = contactsSlice.actions
export default contactsSlice.reducer
