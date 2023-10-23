import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    addInvoice: (state, action) => {
      return [...state, action.payload];
    },

    updateInvoice: (state, action) => {
      return state
        .filter((invoice) => invoice.id !== action.payload.id)
        .concat([action.payload]);
    },

    deleteInvoice: (state, action) => {
      return state.filter((invoice) => invoice.id !== action.payload);
    },
  },
});

export const { addInvoice, updateInvoice, deleteInvoice } =
  invoicesSlice.actions;

export const getInvoices = (state) => state.invoices;

export default invoicesSlice.reducer;
