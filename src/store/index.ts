import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './reducers/contactsSlice'
import filterReducer from './reducers/filterSlice'

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filtering: filterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
