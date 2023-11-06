import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addInvoice, updateInvoice } from "../store/slices/invoicesSlice";
import { Link, useParams } from "react-router-dom";
import { makeid5 } from "../Helpers/MakeId";
import { isExist } from "../Helpers/isExist";
import { useNavigate } from "react-router-dom";
import { getInvoices } from "../store/slices/invoicesSlice";
import { Invoice } from "../Helpers/domain";
const AddEditInvoice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const invoices = useSelector(getInvoices);
  const { id } = useParams();

  const defaultEditForm = {
    date: "",
    name: " ",
    surname: "",
    sentTo: "",
    purpose: "",
    paymentDue: "",
    streetAdress: " ",
    postCode: "",
    city: "",
    country: "",
  };

  const invoiceInfo = invoices.filter(
    (invoice: Invoice) => invoice.id === id
  )[0];
  const defaultValues = invoiceInfo ? invoiceInfo : defaultEditForm;
  const labelClasses = "block text-gray-700 text-sm font-bold mb-4";
  const inputClasses = "text-[2rem] p-1 rounded mx-2 outline-none";
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <div className="flex flex-col  w-[50rem]  h-[39.4375rem] my-0 mx-auto">
      <Link to={"/"}>Go Back</Link>

      <form
        onSubmit={handleSubmit((data) => {
          if (invoiceInfo) {
            const updatedInvoice = { ...invoiceInfo, ...data };
            dispatch(updateInvoice(updatedInvoice));
          } else {
            const newInvoice = { ...data, id: makeid5() };
            dispatch(addInvoice(newInvoice));
          }
          navigate("/");
        })}
      >
        <h2 className="text-[3rem] bold text-[#0C0E16] pb-3">
          {isExist(invoiceInfo) ? "Edit" : "Add"} Invoice:{" "}
        </h2>
        <h3>
          <p>Bill to</p>
        </h3>
        <label className={labelClasses} htmlFor="name">
          <span>Client's Name</span>
          <input className={inputClasses} {...register("name")} type="text" />
        </label>
        <label className={labelClasses} htmlFor="surname">
          <span>Client's Surname</span>
          <input
            className={inputClasses}
            {...register("surname")}
            type="text"
          />
        </label>
        <label className={labelClasses} htmlFor="email">
          <span>Email</span>
          <input
            className={inputClasses}
            type="email"
            {...register("sentTo")}
          />
        </label>
        <label className={labelClasses} htmlFor="streetAdress">
          <span>Street Adress</span>
          <input
            className={inputClasses}
            type="text"
            {...register("streetAdress")}
          />
        </label>
        <label className={labelClasses} htmlFor="city">
          <span>City</span>
          <input className={inputClasses} type="text" {...register("city")} />
        </label>
        <label className={labelClasses} htmlFor="postCode">
          <span>Post code</span>
          <input
            className={inputClasses}
            type="text"
            {...register("postCode")}
          />
        </label>
        <label className={labelClasses} htmlFor="country">
          <span>country</span>
          <input
            className={inputClasses}
            type="text"
            {...register("country")}
          />
        </label>
        <label className={labelClasses} htmlFor="date">
          <span>Invoice Date</span>
          <input className={inputClasses} type="text" {...register("date")} />
        </label>
        <label className={labelClasses} htmlFor="purpose">
          <span>Project description</span>
          <input
            className={inputClasses}
            type="text"
            {...register("purpose")}
          />
        </label>
        <button className="bg-[#7C5DFA] hover:bg-[#20B2AA] text-white font-bold py-2 px-4 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AddEditInvoice;
