import { createSlice } from "@reduxjs/toolkit";
import type { Invoice } from "../../Helpers/domain";
import { makeid5 } from "../../Helpers/MakeId";
import details from "../../assets/img/details.svg";
const initialState: Invoice[] = [
  {
    id: makeid5(),
    date: "12 Sep 2023",
    name: "John",
    surname: "Silverhand",
    price: "1200$",
    paymentState: "Paid",
    details: details,
  },

  {
    id: makeid5(),
    date: "15 Feb 2023",
    name: "Martin",
    surname: "Gore",
    price: "1500$",
    paymentState: "Pending",
    details: details,
  },
  {
    id: makeid5(),
    date: "16 Mar 2023",
    name: "David",
    surname: "Gahan",
    price: "1000$",
    paymentState: "Paid",
    details: details,
  },
  {
    id: makeid5(),
    date: "20 Jul 2023",
    name: "Alan",
    surname: "Wilder",
    price: "1800$",
    paymentState: "Pending",
    details: details,
  },
  {
    id: makeid5(),
    date: "25 Nov 2023",
    name: "Andy",
    surname: "Fletcher",
    price: "1500$",
    paymentState: "Pending",
    details: details,
  },
  {
    id: makeid5(),
    date: "11 Aug 2023",
    name: "Marilyn ",
    surname: "Monroe",
    price: "2500$",
    paymentState: "Paid",
    details: details,
  },
  {
    id: makeid5(),
    date: "10 Dec 2023",
    name: "Marilyn ",
    surname: "Manson",
    price: "3500$",
    paymentState: "Pending",
    details: details,
  },
  {
    id: makeid5(),
    date: "14 Jun 2023",
    name: "Mike ",
    surname: "Tason",
    price: "6500$",
    paymentState: "Paid",
    details: details,
  },
  {
    id: makeid5(),
    date: "12 Jan 2023",
    name: "Jackie",
    surname: "Chan",
    price: "8500$",
    paymentState: "Draft",
    details: details,
  },
  {
    id: makeid5(),
    date: "22 Oct 2023",
    name: "Bruce",
    surname: "Lee",
    price: "3800$",
    paymentState: "Draft",
    details: details,
  },
];

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
