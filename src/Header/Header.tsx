import { Link } from "react-router-dom";
import plusNewInvoice from "../assets/img/plusNewInvoice.svg";
import { useSelector, useDispatch } from "react-redux";
import { getInvoices } from "../store/slices/invoicesSlice";
import { setFilter } from "../store/slices/filterSlice";

const Header = () => {
  const dispatch = useDispatch();
  const invoicesLength = useSelector(getInvoices).length;
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="flex  w-[45.625rem]  my-0 mx-auto  mb-[1.5rem] ">
      <div className="flex flex-col justify-evenly  items-start  w-1/2">
        <div>
          <h1 className=" flex text-[2.25rem] font-bold">Invoices</h1>
        </div>
        <div>
          <p className=" text-[#888EB0]">
            {invoicesLength === 0 && "No invoices"}
            {invoicesLength === 1 && "There is 1  invoice"}
            {invoicesLength > 1 && `There are ${invoicesLength} total invoices`}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between w-1/2">
        <div>
          <label htmlFor="status"></label>
          <select
            onChange={handleChange}
            className="bg-[#F8F8FB]"
            name="Filter by status"
            id="status"
          >
            <option value="noFilter" className=" text-[0.9375rem] font-bold">
              Filter by status
            </option>
            <option className="text-[#888EB0] font-medium" value="paid">
              Paid
            </option>
            <option className="text-[#888EB0] font-medium" value="pending">
              Pending
            </option>
            <option className="text-[#888EB0] font-medium" value="draft">
              Draft
            </option>
          </select>
        </div>
        <Link to={"/addNew"}>
          <div className="w-[9.375rem] flex items-center justify-evenly h-[3rem] bg-[#7C5DFA] rounded-full">
            <div>
              <img src={plusNewInvoice} alt="plusNewInvoice" />
            </div>
            <p className="text-[#FFFFFF]">New Invoice</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
