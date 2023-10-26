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
    <div className="flex  w-[45.625rem]  my-0 mx-auto  ">
      <ul>
        {invoices.map((invoice) => (
          <Item key={invoice.id} invoice={invoice} />
        ))}
      </ul>
    </div>
  );
};

export default List;
