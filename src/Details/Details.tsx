import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import backToList from "../assets/img/backToList.svg";
import paidRound from "../assets/img/paidRound.svg";
import pendingRound from "../assets/img/pendingRound.svg";
import draftRound from "../assets/img/draftRound.svg";
import React from "react";
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

      <div className="  mt-[1rem]  h-[39.4375rem] rounded-lg shadow-md bg-[#fff] pt-[3rem] px-[3rem]">
        <div className="flex  ">
          <div className="flex flex-col w-1/2 h-[4.6875rem]">
            <div className="flex ">
              <p className="font-bold text-[0.9375rem]">#{invoiceDetails.id}</p>
            </div>
            <div className="flex ">
              <p className="text-[#7E88C3] font-medium text-[0.8125rem]">
                {" "}
                {invoiceDetails.purpose}
              </p>
            </div>
          </div>

          <div className=" w-1/2 h-[4.6875rem] flex justify-end">
            <div className="w-[5.5rem] ">
              <p className="text-[#7E88C3] tracking-[0.00625rem] text-[0.8125rem] font-medium text-right">
                19 Union Terrace London E1 3EZ United Kingdom
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-[2rem]">
          <div>
            <p className="text-[#7E88C3] font-medium text-[0.8125rem]">
              Invoice Date
            </p>
            <p className="font-bold mt-[0.8rem]">{invoiceDetails.date}</p>
            <p className="text-[#7E88C3] mt-[2rem] font-medium text-[0.8125rem]">
              Payment Due
            </p>
            <p className="font-bold mt-[0.8rem]">{invoiceDetails.paymentDue}</p>
          </div>

          <div>
            <p className="text-[#7E88C3] font-medium text-[0.8125rem]">
              Bill to
            </p>
            <p className="mt-[0.8rem]">
              {invoiceDetails.name} {invoiceDetails.surname}
            </p>
            <p className="text-[#7E88C3] font-medium text-[0.8125rem]">
              {invoiceDetails.streetAdress}
            </p>
            <p className="text-[#7E88C3] font-medium text-[0.8125rem]">
              {invoiceDetails.city}
            </p>
            <p className="text-[#7E88C3] font-medium text-[0.8125rem]">
              {invoiceDetails.postCode}
            </p>
            <p className="text-[#7E88C3] font-medium text-[0.8125rem]">
              {invoiceDetails.country}
            </p>
          </div>

          <div>
            <p className="text-[#7E88C3] font-medium text-[0.8125rem]">
              Sent To
            </p>
            <p className="mt-[0.8rem]">{invoiceDetails.sentTo}</p>
          </div>
        </div>
        <div className="grid grid-cols-4 bg-[#F9FAFE] h-[11.5rem] rounded-t-lg pt-[2rem] pl-[2rem] mt-[2.75rem]">
          <div className="text-[#7E88C3] text-[0.8125rem] font-medium">
            Item Name
          </div>
          <div className="text-[#7E88C3] text-[0.8125rem] font-medium pl-[7.5rem]">
            QTY
          </div>
          <div className="text-[#7E88C3] text-[0.8125rem] font-medium pl-[8rem] ">
            Price
          </div>
          <div className="text-[#7E88C3] text-[0.8125rem] font-medium pl-[6rem] ">
            Total
          </div>

          {invoiceDetails.items.map((item, index) => (
            <React.Fragment key={index}>
              <div>{item.name}</div>
              <div className="pl-[8rem] text-[0.9375rem] font-bold text-[#7E88C3]">
                {item.qty}
              </div>
              <div className="pl-[8rem] text-[0.9375rem] font-bold text-[#7E88C3] ">
                ${""}
                {item.price}
              </div>
              <div className="pl-[6rem] font-bold">
                ${item.qty * item.price}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-between h-[5rem] bg-[#373B53] px-[2rem]  items-center rounded-b-lg">
          <div className="text-[#FFFFFF] text-[0.8125rem] tracking-[-0.00625rem] font-medium">
            Amount Due
          </div>
          <div className="text-[#FFFFFF] font-bold">
            ${" "}
            {invoiceDetails.items.reduce((prev, curr) => {
              const totalPrice = curr.qty * curr.price;
              return prev + totalPrice;
            }, 0)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
