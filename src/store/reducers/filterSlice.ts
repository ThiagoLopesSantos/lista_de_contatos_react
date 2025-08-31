import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  filtering: string
  fCategory: 'family' | 'friends' | 'work' | 'all'
}

const initialState: FilterState = {
  filtering: '',
  fCategory: 'all'
}

const filterSlice = createSlice({
  name: 'filtering',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filtering = action.payload
    }
  }
})

export const { changeFilter } = filterSlice.actions
export default filterSlice.reducer
