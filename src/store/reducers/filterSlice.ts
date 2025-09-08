import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from '../../utils/enums/Contact'

type FilterState = {
  filtering?: string
  fCategory: Category
}

const initialState: FilterState = {
  filtering: '',
  fCategory: Category.TODOS
}

const filterSlice = createSlice({
  name: 'filtering',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filtering = action.payload
    },
    changeCategory: (state, action: PayloadAction<Category>) => {
      state.fCategory = action.payload
    }
  }
})

export const { changeFilter, changeCategory } = filterSlice.actions
export default filterSlice.reducer
