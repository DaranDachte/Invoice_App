import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import backToList from "../assets/img/backToList.svg";
import paidRound from "../assets/img/paidRound.svg";
import pendingRound from "../assets/img/pendingRound.svg";
import draftRound from "../assets/img/draftRound.svg";
const Details = () => {
  const navigate = useNavigate();

  const invoices = useSelector((state) => state.invoices);
  const { id } = useParams();

  const invoiceDetails = invoices.filter((invoice) => invoice.id === id)[0];

  return (
    <div className=" flex flex-col w-[45.625rem]  my-0 mx-auto h-screen bg-[#F8F8FB]">
      <div className="flex cursor-pointer " onClick={() => navigate(-1)}>
        <img src={backToList} alt="backToList" />
        <div>
          <p>Go Back</p>
        </div>
      </div>
      <div className="flex bg-[#FFF] rounded-lg  p-[1rem] shadow-md ">
        <div className="flex w-1/2 items-center">
          <div>
            <p className="text-[#858BB2] text-[0.8125rem] font-medium tracking-[-0.00625rem]">
              Status
            </p>
          </div>
          <div className="w-[6.5rem] h-[2.5rem] pl-[1rem] flex rounded">
            {invoiceDetails.paymentState === "Pending" ? (
              <div className="bg-[#fff8f0] flex items-center rounded w-[6.5rem] h-[2.5rem] justify-center ">
                <img
                  className="w-[0.5rem]"
                  src={pendingRound}
                  alt="pendingRound"
                />
                <p className="text-[#FF8F00] ml-[0.5rem]">Pending</p>
              </div>
            ) : invoiceDetails.paymentState === "Paid" ? (
              <div className="bg-[#f3fcf9] rounded flex items-center w-[6.5rem] h-[2.5rem] justify-center">
                <img className="w-[0.5rem]" src={paidRound} alt="paidRound" />
                <p className="text-[#33D69F] ml-[0.5rem]">Paid</p>
              </div>
            ) : (
              <div className="bg-[#e6e6e8] rounded flex items-center w-[6.5rem] h-[2.5rem] justify-center">
                <img className="w-[0.5rem]" src={draftRound} alt="draftRound" />
                <p className="text-[#373B53] ml-[0.5rem]">Draft</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex w-1/2 items-center">
          <div className=" flex items-center justify-center  bg-[#F9FAFE]  w-[4.5625rem] h-[3rem] rounded-3xl">
            <p className=" text-[#7E88C3]"> Edit</p>
          </div>
          <div className="bg-[#EC5757]  flex items-center  w-[5.5625rem] h-[3rem] ml-[0.5rem] justify-center rounded-3xl">
            <p className="text-[#fff]">Delete</p>
          </div>
          <div className="flex items-center justify-center ml-[0.5rem] bg-[#7C5DFA] w-[8.1875rem] h-[3rem] rounded-3xl">
            <p className="text-[#fff]">Mark as Paid</p>
          </div>
        </div>
      </div>

      <div className="  mt-[1rem]  h-[39.4375rem] rounded-lg shadow-md bg-[#fff]">
        <div className="flex  ">
          <div className="flex flex-col w-1/2 h-[4.6875rem]">
            <div className="flex">#{invoiceDetails.id}</div>
            <div className="flex">{invoiceDetails.purpose}</div>
          </div>

          <div className=" w-1/2 h-[4.6875rem]">
            <p className="text-[#7E88C3] tracking-[0.00625rem] font-medium">
              19 Union Terrace London E1 3EZ United Kingdom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
