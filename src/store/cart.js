import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "utils";

const BROWSER_STORAGE_CART_KEY = "shopping_cart";
const saveBrowserCartStorage = (state) =>
  saveState(BROWSER_STORAGE_CART_KEY, state);
const getBrowserCartStorage = () => loadState(BROWSER_STORAGE_CART_KEY);

const getVouchersByAppliedName = (vouchers, voucherName) =>
  vouchers.map((voucher) =>
    voucher.name === voucherName
      ? { ...voucher, isApplied: true }
      : { ...voucher, isApplied: false }
  );

const getVouchersDiscount = (vouchers) =>
  vouchers.find(({ isApplied }) => isApplied)?.discount ?? 0;

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: getBrowserCartStorage() ?? []
  },
  reducers: {
    addProduct: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      saveBrowserCartStorage(state.cart);
    },
    removeProduct: (state, action) => {
      const itemsRemainingInCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = itemsRemainingInCart;
      saveBrowserCartStorage(state.cart);
    },
    updateQuantity: (state, action) => {
      const updatedItemsInCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.newQuantity }
          : item
      );
      state.cart = updatedItemsInCart;
      saveBrowserCartStorage(state.cart);
    },
    increaseQuantity: (state, action) => {
      const updatedItemsInCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      state.cart = updatedItemsInCart;
      saveBrowserCartStorage(state.cart);
    },
    decreaseQuantity: (state, action) => {
      const updatedItemsInCart = state.cart.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      state.cart = updatedItemsInCart;
      saveBrowserCartStorage(state.cart);
    },
    applyVoucher: (state, action) => {
      const { voucherApplied, id } = action.payload;

      const updatedItemsInCart = state.cart.map((item) => {
        if (item.id === id) {
          const vouchers = getVouchersByAppliedName(
            item.vouchers,
            voucherApplied
          );
          const discountPrice =
            item.price - item.price * (getVouchersDiscount(vouchers) / 100);

          return { ...item, discountPrice, vouchers };
        }

        return item;
      });
      state.cart = updatedItemsInCart;
      saveBrowserCartStorage(state.cart);
    }
  }
});

export const {
  addProduct,
  removeProduct,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity,
  applyVoucher,
  productsPurchased
} = cartSlice.actions;

export default cartSlice.reducer;
