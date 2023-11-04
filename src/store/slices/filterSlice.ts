import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "noFilter",
  reducers: {
    setFilter: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const getCurrentFilter = (state) => state.filter;

export default filterSlice.reducer;
