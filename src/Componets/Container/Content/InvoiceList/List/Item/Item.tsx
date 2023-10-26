import { useDispatch } from "react-redux";

export type InvoiceT = {
  id: string;
  date: string;
  name: string;
  surname: string;
  price: string;
};

const Item = ({ invoice }) => {
  const vacancyDetails = {
    id: invoice.id,
    date: invoice.date,
    name: invoice.name,
    surname: invoice.surname,
    price: invoice.price,
    paymentState: invoice.paymentState,
    details: invoice.details,
  };

   const paymentStateStyles= 


  const dispatch = useDispatch();

  return (
    <div className=" flex  justify-between rounded mb-[1.5rem] w-[45.625rem]  h-[4.5rem] bg-[#fff] ">
      <div className=" flex justify-between items-center w-1/2">
        <div className="text-[#7E88C3]">
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
        <div className="w-[6.5rem] h-[2.5rem]  rounded">
          {invoice.paymentState}
        </div>
        <div className={paymentStateStyles}>
          <img src={invoice.details} alt="details" />
        </div>
      </div>
    </div>
  );
};

export default Item;
