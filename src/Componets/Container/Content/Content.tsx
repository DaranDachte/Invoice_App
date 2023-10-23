import { Routes, Route } from "react-router-dom";
import InvoiceList from "./InvoiceList/InvoiceList";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InvoiceList />} />
      </Routes>
    </div>
  );
};

export default Content;
