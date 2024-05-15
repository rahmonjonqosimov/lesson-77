import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: {
    value: 1,
  },
  reducers: {
    addCount(state) {
      state.value = state.value + 1;
    },
  },
});

export const { addCount } = countSlice.actions;
export default countSlice.reducer;
