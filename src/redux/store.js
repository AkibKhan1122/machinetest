import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice";

const Store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default Store;
