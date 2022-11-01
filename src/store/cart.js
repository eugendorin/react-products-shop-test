import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "utils";

const BROWSER_STORAGE_CART_KEY = "shopping_cart";
const saveBrowserCartStorage = (state) => saveState(BROWSER_STORAGE_CART_KEY, state);
const getBrowserCartStorage = () => loadState(BROWSER_STORAGE_CART_KEY);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: getBrowserCartStorage() ?? []
  },
  reducers: {
    addProduct: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      saveBrowserCartStorage(state.cart);
    },
    removeProduct: (state, action) => {
      const itemsRemainingInCart = state.cart.filter((item) => item.id === action.payload.id);
      state.cart = itemsRemainingInCart;
      saveBrowserCartStorage(state.cart);
    },
    updateQuantity: (state, action) => {
      const updatedItemsInCart = state.cart.map((item) =>
        item.id === action.payload.id ? (item.quantity = action.payload.updatedQuantity) : item
      );
      state.cart = updatedItemsInCart;
      saveBrowserCartStorage(state.cart);
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
