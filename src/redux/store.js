import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import countSlice from "./countSlice";
// import heartSlice from "./heartSlice";

export const store = configureStore({
  reducer: {
    count: countSlice,
    // heart: heartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
