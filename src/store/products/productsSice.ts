import { createSlice } from "@reduxjs/toolkit";

import { IProductsInitialState } from "../../types/products.types";

const initialState: IProductsInitialState = {
  products: null,
  allProducts: null,
  isProductsLoading: false,
  isAllProductsLoading: false,
};
export const PRODUCTS_SLICE_NAME = "products";

const productsSlice = createSlice({
  name: PRODUCTS_SLICE_NAME,
  initialState,
  reducers: {
    setProductsSlice: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setProductsSlice } = productsSlice.actions;

export const selectProducts = (state: {
  [PRODUCTS_SLICE_NAME]: IProductsInitialState;
}) => state[PRODUCTS_SLICE_NAME];
export default productsSlice.reducer;
