import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
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

export const getCurrentFilter = (state: RootState) => state.filter;

export default filterSlice.reducer;
