import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  filtering?: string
  fCategory: 'familia' | 'amigos' | 'trabalho' | 'todos'
}

const initialState: FilterState = {
  filtering: '',
  fCategory: 'todos'
}

const filterSlice = createSlice({
  name: 'filtering',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filtering = action.payload
    },
    changeCategory: (state, action: PayloadAction<FilterState>) => {
      state.fCategory = action.payload.fCategory
    }
  }
})

export const { changeFilter, changeCategory } = filterSlice.actions
export default filterSlice.reducer
