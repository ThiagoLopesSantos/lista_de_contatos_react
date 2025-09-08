import Contact from '../../models/Contact'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState: {
  itens: Contact[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
} = {
  itens: [],
  status: 'idle'
}

const apiUrl = `${process.env.REACT_APP_API_URL}/contacts`

// Função assíncrona para buscar contatos de uma API
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await fetch(apiUrl)
    const contacts = await response.json()

    return contacts as Contact[]
  }
)

export const addContact = createAsyncThunk(
  'contacts/add',
  async (newContact: Omit<Contact, 'id'>) => {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    })
    const contactCreated = await response.json()
    return contactCreated as Contact
  }
)

export const editContact = createAsyncThunk(
  'contacts/edit',
  async (contact: Contact) => {
    const response = await fetch(`${apiUrl}/${contact.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
    const updatedContact = await response.json()
    return updatedContact as Contact
  }
)

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id: number) => {
    await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    })
    return id
  }
)

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // Estas funções agora estão sendo utilizadas no extraReducers como addContact, removeContact e editContact
    // remove: (state, action: PayloadAction<number>) => {
    //   state.itens = [
    //     ...state.itens.filter((contact) => contact.id !== action.payload)
    //   ]
    // },
    // edit: (state, action: PayloadAction<Contact>) => {
    //   const contactIndex = state.itens.findIndex(
    //     (c) => c.id === action.payload.id
    //   )
    //   if (contactIndex >= 0) {
    //     state.itens[contactIndex] = action.payload
    //   }
    // },
    // register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
    //   const contactExists = state.itens.find(
    //     (contact) =>
    //       contact.name.toLowerCase() === action.payload.name.toLowerCase()
    //   )
    //   if (contactExists) {
    //     alert('Contato já cadastrado!')
    //   } else {
    //     const lastContact = state.itens[state.itens.length - 1]
    //     const newContact = {
    //       ...action.payload,
    //       id: lastContact ? lastContact.id + 1 : 1
    //     }
    //     state.itens.push(newContact)
    //   }
    // }
  },
  // O extraReducers é usado para lidar com ações assíncronas fora do slice
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.itens = action.payload
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.itens.push(action.payload)
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const updatedContact = action.payload
        const index = state.itens.findIndex((c) => c.id === updatedContact.id)

        if (index !== -1) {
          state.itens[index] = updatedContact
        }
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        const removedId = action.payload
        state.itens = state.itens.filter((c) => c.id !== removedId)
      })
  }
})

export default contactsSlice.reducer
