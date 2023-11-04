import { getInvoices } from "../../../../../store/slices/invoicesSlice";
import Item from "./Item/Item";
import { useSelector } from "react-redux";
import noDataPicture from "../../../../../assets/img/noDataPicture.svg";
import { getCurrentFilter } from "../../../../../store/slices/filterSlice";
const List = () => {
  const invoices = useSelector(getInvoices);
  const currentFilter = useSelector(getCurrentFilter);
  console.log(currentFilter);

  return (
    <>
      <div className="flex   w-[45.625rem]  my-0 mx-auto ">
        {invoices.length ? (
          <ul>
            {invoices
              .filter((invoice) => {
                return currentFilter !== "noFilter"
                  ? invoice.paymentState.toLowerCase() === currentFilter
                  : true;
              })

              .map((invoice) => (
                <Item key={invoice.id} invoice={invoice} />
              ))}
          </ul>
        ) : (
          <div className="flex flex-col my-[5rem]  justify-evenly mx-auto items-start ">
            <div>
              <img src={noDataPicture} alt="noDataPicture" />{" "}
            </div>
            <div>
              <h3 className="text-[1.5rem] mt-[4.5rem]">
                There is nothing here
              </h3>
              <p className="w-[13rem] h-[2rem] mt-[2rem]  text-[0.8125rem] text-center text-[#888EB0]">
                Create an invoice by clicking the New Invoice button and get
                started
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default List;
