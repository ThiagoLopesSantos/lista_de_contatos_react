import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './reducers/contactsSlice'
import filterReducer from './reducers/filterSlice'

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filtering: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
