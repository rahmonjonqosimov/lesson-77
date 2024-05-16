import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import countSlice from "./countSlice";
import heartSlice from "./heartSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    count: countSlice,
    heart: heartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
