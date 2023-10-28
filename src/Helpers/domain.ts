export type Invoice = {
  id: string;
  name: string;
  surname: string;
  date: string;
  price: string;
  paymentState: string;
  details: string;
  sentTo: string;
  purpose: string;
  paymentDue: string;
  customerAdress: string;
  streetAdress: string;
  postCode: string;
  city: string;
  country: string;
  items: Array<{
    name: string;
    qty: number;
    price: number;
  }>;
};
