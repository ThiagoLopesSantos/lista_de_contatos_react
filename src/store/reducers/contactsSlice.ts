import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: [
    {
      id: 1,
      category: 'Familia',
      name: 'Gustavo Santos',
      email: 'gustavo@gmail.com',
      phone: '(21) 9 9709-0979'
    },
    {
      id: 2,
      category: 'Trabalho',
      name: 'Emanuely Versalles',
      email: 'manu.vs@gmail.com',
      phone: '(21) 9 8998-8998'
    },
    {
      id: 3,
      category: 'Amigos',
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
    }
  }
})

export const { remove, edit } = contactsSlice.actions
export default contactsSlice.reducer
