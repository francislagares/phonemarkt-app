import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ProductCart } from '@/models/product';

const initialState = {
  cartItems: [] as ProductCart[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ProductCart>) => {
      const newItem = {
        id: action.payload.id,
        colorCode: action.payload.colorCode,
        storageCode: action.payload.storageCode,
      };

      state.cartItems.push(newItem);
    },
  },
});
console.log(cartSlice);
export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
