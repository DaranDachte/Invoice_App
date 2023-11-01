import {
  getInvoices,
  addInvoice,
} from "../../../../../store/slices/invoicesSlice";
import Item from "./Item/Item";
import { useSelector } from "react-redux";
import noDataPicture from "../../../../../assets/img/noDataPicture.svg";

const List = () => {
  const invoices = useSelector(getInvoices);
  return (
    <div className="flex  w-[45.625rem]  my-0 mx-auto  ">
      {invoices.length ? (
        <ul>
          {invoices.map((invoice) => (
            <Item key={invoice.id} invoice={invoice} />
          ))}
        </ul>
      ) : (
        <div>
          <div>
            <img src={noDataPicture} alt="noDataPicture" />{" "}
          </div>
          <div>
            <h3>There is nothing here</h3>
            <p>
              Create an invoice by clicking the New Invoice button and get
              started
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
