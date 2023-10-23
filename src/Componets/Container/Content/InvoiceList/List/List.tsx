import {
  getInvoices,
  addInvoice,
} from "../../../../../store/slices/invoicesSlice";
import Item from "./Item/Item";
import { useSelector } from "react-redux";

const List = () => {
  console.log(addInvoice);

  const invoices = useSelector(getInvoices);
  return (
    <div>
      <Item />
    </div>
  );
};

export default List;
