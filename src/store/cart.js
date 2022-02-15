import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        // state
    },
    reducers: {
        addProduct: (state, action) => {
            //
        },
        removeProduct: (state, action) => {
            //
        },
        updateQuantity: (state, action) => {
            //
        },
        applyVoucher: (state, action) => {
            //
        },
        productsPurchased: (state, action) => {
            //
        },
    },
});

export const {
    addProduct,
    removeProduct,
    updateQuantity,
    applyVoucher,
    productsPurchased,
} = cartSlice.actions;

export default cartSlice.reducer;
