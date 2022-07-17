import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../models/Product';

export interface ICartItem extends IProduct {
  unitPrice: number;
  totalCartItemPrice: number;
  size: keyof [0, 1, 2];
  quantity: number;
}

interface ICart {
  cartItems: ICartItem[];
  TotalCartQuantity: number;
  totalCartPrice: number;
}

interface IPayload extends ICartItem {
  quantity: number;
}

const initialState: ICart = {
  cartItems: [],
  TotalCartQuantity: 0,
  totalCartPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IPayload>) => {
      const payload = action.payload;
      state.cartItems.push(payload);
      state.TotalCartQuantity += +payload.quantity;
      state.totalCartPrice += payload.totalCartItemPrice;
    },
    reset: (state) => {
      state.cartItems = [];
      state.TotalCartQuantity = 0;
      state.totalCartPrice = 0;
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;

export default cartSlice.reducer;
