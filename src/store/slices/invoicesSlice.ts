import { createSlice } from "@reduxjs/toolkit";
import type { Invoice } from "../../Helpers/domain";
import { makeid5 } from "../../Helpers/MakeId";

const initialState: Invoice[] = [
  {
    id: makeid5(),
    date: "12 Sep 2023",
    name: "John ",
    surname: "Silverhand",
    price: "1,200",
    paymentState: "Paid",
    sentTo: "abs@mail.com",
    purpose: "Graphic Design",
    paymentDue: "12 October",
    customerAdress: "12 October",
    streetAdress: " Freidhof str 12",
    postCode: "42356",
    city: "Berlin",
    country: "Germany",
    items: [
      {
        name: "Banner Design",
        qty: 1,
        price: 156,
      },
      {
        name: "Email Design",
        qty: 2,
        price: 200,
      },
    ],
  },

  {
    id: makeid5(),
    date: "15 Feb 2023",
    name: "Martin ",
    surname: "Gore",
    price: "1,500",
    paymentState: "Pending",
    sentTo: "abw@mail.com",
    purpose: "Video Design",
    paymentDue: "13 October",
    customerAdress: "Freelove str 14",
    streetAdress: "Danziger str 13",
    postCode: "12342",
    city: "Köln",
    country: "Germany",
    items: [
      {
        name: "Banner Design",
        qty: 1,
        price: 156,
      },
      {
        name: "Email Design",
        qty: 2,
        price: 200,
      },
    ],
  },
  {
    id: makeid5(),
    date: "16 Mar 2023",
    name: "David ",
    surname: "Gahan",
    price: "1,000",
    paymentState: "Paid",

    sentTo: "abt@mail.com",
    purpose: "Article Design",
    paymentDue: "asdasd",
    customerAdress: "2134",
    streetAdress: "wrwer",
    postCode: "32146",
    city: "Essen",
    country: "Germany",
    items: [
      {
        name: "Text Design",
        qty: 1,
        price: 156,
      },
      {
        name: " Site Design",
        qty: 2,
        price: 200,
      },
    ],
  },
  {
    id: makeid5(),
    date: "20 Jul 2023",
    name: "Alan ",
    surname: "Wilder",
    price: "1,800",
    paymentState: "Pending",

    sentTo: "abs@mail.com",
    purpose: "sdf",
    paymentDue: "asdasd",
    customerAdress: "2134",
    streetAdress: "wrwer",
    postCode: "sadasd",
    city: "asdsda",
    country: "sdfdfs",
    items: [
      {
        name: "Banner Design",
        qty: 1,
        price: 156,
      },
      {
        name: "Email Design",
        qty: 2,
        price: 200,
      },
    ],
  },
  {
    id: makeid5(),
    date: "25 Nov 2023",
    name: "Andy ",
    surname: "Fletcher",
    price: "1,500",
    paymentState: "Pending",
    sentTo: "abs@mail.com",
    purpose: "sdf",
    paymentDue: "asdasd",
    customerAdress: "2134",
    streetAdress: "wrwer",
    postCode: "sadasd",
    city: "asdsda",
    country: "sdfdfs",
    items: [
      {
        name: "Banner Design",
        qty: 1,
        price: 156,
      },
      {
        name: "Email Design",
        qty: 2,
        price: 200,
      },
    ],
  },
  {
    id: makeid5(),
    date: "11 Aug 2023",
    name: "Marilyn ",
    surname: "Monroe",
    price: "2,500",
    paymentState: "Paid",
    sentTo: "abs@mail.com",
    purpose: "sdf",
    paymentDue: "asdasd",
    customerAdress: "2134",
    streetAdress: "wrwer",
    postCode: "sadasd",
    city: "asdsda",
    country: "sdfdfs",
    items: [
      {
        name: "Banner Design",
        qty: 1,
        price: 156,
      },
      {
        name: "Email Design",
        qty: 2,
        price: 200,
      },
    ],
  },
  {
    id: makeid5(),
    date: "10 Dec 2023",
    name: "Marilyn ",
    surname: "Manson",
    price: "3,500",
    paymentState: "Pending",
    sentTo: "abs@mail.com",
    purpose: "sdf",
    paymentDue: "asdasd",
    customerAdress: "2134",
    streetAdress: "wrwer",
    postCode: "sadasd",
    city: "asdsda",
    country: "sdfdfs",
    items: [
      {
        name: "Banner Design",
        qty: 1,
        price: 156,
      },
      {
        name: "Email Design",
        qty: 2,
        price: 200,
      },
    ],
  },
  {
    id: makeid5(),
    date: "14 Jun 2023",
    name: "Mike ",
    surname: "Tyson",
    price: "6,500",
    paymentState: "Paid",
    sentTo: "abs@mail.com",
    purpose: "sdf",
    paymentDue: "asdasd",
    customerAdress: "2134",
    streetAdress: "wrwer",
    postCode: "sadasd",
    city: "asdsda",
    country: "sdfdfs",
    items: [
      {
        name: "Banner Design",
        qty: 1,
        price: 156,
      },
      {
        name: "Email Design",
        qty: 2,
        price: 200,
      },
    ],
  },
  {
    id: makeid5(),
    date: "12 Jan 2023",
    name: "Jackie ",
    surname: "Chan",
    price: "8,500",
    paymentState: "Draft",
    sentTo: "abs@mail.com",
    purpose: "sdf",
    paymentDue: "asdasd",
    customerAdress: "2134",
    streetAdress: "wrwer",
    postCode: "sadasd",
    city: "asdsda",
    country: "sdfdfs",
    items: [
      {
        name: "Banner Design",
        qty: 1,
        price: 156,
      },
      {
        name: "Email Design",
        qty: 2,
        price: 200,
      },
    ],
  },
  {
    id: makeid5(),
    date: "22 Oct 2023",
    name: "Bruce ",
    surname: "Lee",
    price: "3,800",
    paymentState: "Draft",
    sentTo: "abs@mail.com",
    purpose: "sdf",
    paymentDue: "asdasd",
    customerAdress: "2134",
    streetAdress: "wrwer",
    postCode: "sadasd",
    city: "asdsda",
    country: "sdfdfs",
    items: [
      {
        name: "Banner Design",
        qty: 1,
        price: 156,
      },
      {
        name: "Email Design",
        qty: 2,
        price: 200,
      },
    ],
  },
];

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: [],
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
