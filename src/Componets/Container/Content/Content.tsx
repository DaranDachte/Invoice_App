import { Routes, Route } from "react-router-dom";
import InvoiceList from "./InvoiceList/InvoiceList";
import Details from "../../../Details/Details";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InvoiceList />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default Content;
