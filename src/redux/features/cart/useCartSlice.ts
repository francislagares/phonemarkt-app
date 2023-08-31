import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ProductCart } from '@/models/product';

const initialState = {
  cartItems: [] as ProductCart[],
};

const useCartSlice = createSlice({
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

export const { addItemToCart } = useCartSlice.actions;
export default useCartSlice.reducer;
