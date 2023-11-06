import { useNavigate } from "react-router-dom";
import paidRound from "../../../../../../assets/img/paidRound.svg";
import pendingRound from "../../../../../../assets/img/pendingRound.svg";
import draftRound from "../../../../../../assets/img/draftRound.svg";
import details from "../../../../../../assets/img/details.svg";
import { Invoice } from "../../../../../../Helpers/domain";

type ItemProps = {
  invoice: Invoice;
};

const Item: React.FC<ItemProps> = ({ invoice }) => {
  const navigate = useNavigate();

  const viewDetails = (id: string) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className=" flex  justify-between rounded mb-[1.5rem] w-[45.625rem]  h-[4.5rem] bg-[#fff] ">
      <div className=" flex justify-between items-center w-1/2">
        <div className="text-[#7E88C3] ml-[1rem]">
          #
          <span className="text-[#0C0E16] text-[0.9375rem] tracking -[-0.01563rem] font-bold">
            {invoice.id}
          </span>
        </div>
        <div className="text-[#7E88C3] font-medium tracking-[-0.00625rem]">
          {" "}
          {invoice.date}
        </div>
        <div className="text-[#7E88C3] font-medium tracking-[-0.00625rem]">
          {invoice.name}
          {""}
          {invoice.surname}
        </div>
      </div>
      <div className=" flex justify-around items-center w-1/2">
        <div className="text-[#0C0E16] text-[0.9375rem] tracking -[-0.01563rem] font-bold">
          ${""}
          {invoice.price}
        </div>
        <div className="w-[6.5rem] h-[2.5rem]  flex rounded">
          {invoice.paymentState === "Pending" ? (
            <div className="bg-[#fff8f0] flex items-center rounded w-[6.5rem] h-[2.5rem] justify-center ">
              <img
                className="w-[0.5rem]"
                src={pendingRound}
                alt="pendingRound"
              />
              <p className="text-[#FF8F00] ml-[0.5rem]">Pending</p>
            </div>
          ) : invoice.paymentState === "Paid" ? (
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

        <div className="cursor-pointer" onClick={() => viewDetails(invoice.id)}>
          <img src={details} alt="details" />
        </div>
      </div>
    </div>
  );
};

export default Item;
