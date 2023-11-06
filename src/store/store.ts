import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "./slices/invoicesSlice";
import filtersReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    filter: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
