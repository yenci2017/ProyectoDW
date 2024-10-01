import { createSlice } from '@reduxjs/toolkit'
import data from '../../data/data.json'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: data,
  },
  reducers: {
    reset: (state) => {
        state.products = []
    },
  },
})

export const { reset } = productSlice.actions

export default productSlice.reducer