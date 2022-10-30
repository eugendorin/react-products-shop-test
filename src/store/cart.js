import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    addProduct: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      const itemsRemainingInCart = state.cart.filter((item) => item.id === action.payload.id);
      state.cart = itemsRemainingInCart;
    },
    updateQuantity: (state, action) => {
      const updatedItemsInCart = state.cart.map((item) =>
        item.id === action.payload.id ? (item.quantity = action.payload.updatedQuantity) : item
      );
      state.cart = updatedItemsInCart;
    }
    // applyVoucher: (state, action) => {
    //   //
    // },
    // productsPurchased: (state, action) => {
    //   //
    // }
  }
});

export const { addProduct, removeProduct, updateQuantity, applyVoucher, productsPurchased } =
  cartSlice.actions;

export default cartSlice.reducer;
