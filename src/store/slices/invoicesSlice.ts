import { createSlice } from "@reduxjs/toolkit";
import type { Invoice } from "../../Helpers/domain";
import { makeid5 } from "../../Helpers/MakeId";
import { RootState } from "../store";

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
    paymentDue: "12 October 2024",
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
    paymentDue: "13 October 2024",
    streetAdress: "Danziger str 13",
    postCode: "12342",
    city: "Köln",
    country: "Germany",
    items: [
      {
        name: "Banner Design",
        qty: 1,
        price: 126,
      },
      {
        name: "Email Design",
        qty: 2,
        price: 500,
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
    paymentDue: "10 September 2024",
    streetAdress: "Freelove str 12",
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
        name: " Song Design",
        qty: 2,
        price: 678,
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
    sentTo: "abq@mail.com",
    purpose: "Video design",
    paymentDue: "23 September 2024",
    streetAdress: "Master and servant str 10",
    postCode: "45671",
    city: "Manchester",
    country: "United Kingdom",
    items: [
      {
        name: "Jacket Design",
        qty: 1,
        price: 890,
      },
      {
        name: "Car Design",
        qty: 2,
        price: 798,
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
    sentTo: "abk@mail.com",
    purpose: "Clothes design",
    paymentDue: "13 Juni 2024",
    streetAdress: "Violator str 90",
    postCode: "43512",
    city: "Basildon",
    country: "United Kingdom",
    items: [
      {
        name: "Pullover Design",
        qty: 1,
        price: 201,
      },
      {
        name: " Song Design",
        qty: 4,
        price: 500,
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
    sentTo: "mnr@mail.com",
    purpose: "Song Design",
    paymentDue: "01 December 2024",
    streetAdress: "Sansation str 23",
    postCode: "32154",
    city: "New-York",
    country: "USA",
    items: [
      {
        name: "Song Design",
        qty: 6,
        price: 306,
      },
      {
        name: "String Design",
        qty: 3,
        price: 100,
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
    sentTo: "mns@mail.com",
    purpose: "Body Design",
    paymentDue: "13 January 2024",
    streetAdress: "Matrice str 22",
    postCode: "34509",
    city: "Munchen",
    country: "Germany",
    items: [
      {
        name: "Face Design",
        qty: 1,
        price: 800,
      },
      {
        name: "Legs Design",
        qty: 2,
        price: 700,
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
    sentTo: "tys@mail.com",
    purpose: "Box Design",
    paymentDue: "21 February 2024",
    streetAdress: "Bla bla bla str 1",
    postCode: "32101",
    city: "Liverpool",
    country: "United Kingdom",
    items: [
      {
        name: "Sugar Design",
        qty: 5,
        price: 116,
      },
      {
        name: "Salt Design",
        qty: 4,
        price: 300,
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
    sentTo: "chn@mail.com",
    purpose: "Karate Design",
    paymentDue: "11 November 2024",
    streetAdress: "Cool str 1",
    postCode: "34678",
    city: "Amsterdam",
    country: "Niederlande",
    items: [
      {
        name: "Kung fu Design",
        qty: 1,
        price: 156,
      },
      {
        name: "Fu Kung Design",
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
    purpose: "Just do it Design",
    paymentDue: "1 January 2024",
    streetAdress: "I dont now str 2 ",
    postCode: "56812",
    city: "Mexico",
    country: "Mexico",
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

export const getInvoices = (state: RootState) => state.invoices;

export default invoicesSlice.reducer;
