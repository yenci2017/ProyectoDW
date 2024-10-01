import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], 
    count: 0,
  },
  reducers: {
    addCart: (state, action) => {
      const { name, quantity } = action.payload;
      const existingProduct = state.items.find((product) => product.name === name);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.items.push({ name, quantity });
      }
      state.count = state.count + 1;
    },
    deleteItemCart: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter((product) => product.name !== name);
    },
    deleteCart: (state) => {
      state.items = [];
    },
  },
});

export const { addCart, deleteItemCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
