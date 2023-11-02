import { Routes, Route } from "react-router-dom";
import InvoiceList from "./InvoiceList/InvoiceList";
import Details from "../../../Details/Details";
import AddEditInvoice from "../../../AddEditInvoice/AddEditInvoice";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InvoiceList />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/addNew" element={<AddEditInvoice />} />
        <Route path="/edit/:id" element={<AddEditInvoice />} />
      </Routes>
    </div>
  );
};

export default Content;
