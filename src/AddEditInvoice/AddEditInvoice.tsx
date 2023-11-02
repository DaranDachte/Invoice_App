import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addInvoice, updateInvoice } from "../store/slices/invoicesSlice";
import { Link, useParams } from "react-router-dom";
import { makeid5 } from "../Helpers/MakeId";

const AddEditInvoice = () => {
  const dispatch = useDispatch();

  const invoices = useSelector((state: RootState) => state.invoices);
  const { id } = useParams();

  const defaultEditForm = {
    date: "",
    name: " ",
    sentTo: "",
    purpose: "",
    paymentDue: "",
    streetAdress: " ",
    postCode: "",
    city: "",
    country: "",
  };

  const invoiceInfo = invoices.filter((invoice) => invoice.id === id)[0];
  const defaultValues = invoiceInfo ? invoiceInfo : defaultEditForm;

  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  return ReactDOM.createPortal(
    <div className="  flex backdrop-blur-sm fixed inset-y-0 left-0 z-40">
      {/* <Link to={"/"}>Go Back</Link>*/}
      <aside className="relative w-1/3 h-full ">
        <form
          onSubmit={handleSubmit((data) => {
            if (invoiceInfo) {
              const updatedInvoice = { ...invoiceInfo, ...data };
              dispatch(updateInvoice(updatedInvoice));
            } else {
              const newInvoice = { ...data, id: makeid5() };
              dispatch(addInvoice(newInvoice));
            }
          })}
        >
          <h2>{invoiceInfo ? <p>Edit: #{invoiceInfo.id} </p> : ""}</h2>
          <h3>
            <p>Bill to</p>
          </h3>
          <label htmlFor="name">
            <span>Client's Name</span>
            <input {...register("name")} type="text" />
          </label>

          <label htmlFor="email">
            <span>Email</span>
            <input type="email" {...register("email")} />
          </label>
          <label htmlFor="streetAdress">
            <span>Street Adress</span>
            <input type="text" {...register("streetAdress")} />
          </label>
          <label htmlFor="city">
            <span>City</span>
            <input type="text" {...register("city")} />
          </label>
          <label htmlFor="postCode">
            <span>Post code</span>
            <input type="text" {...register("postCode")} />
          </label>
          <label htmlFor="country">
            <span>country</span>
            <input type="text" {...register("country")} />
          </label>
          <label htmlFor="date">
            <span>Invoice Date</span>
            <input type="text" {...register("date")} />
          </label>
          <label htmlFor="purpose">
            <span>Project description</span>
            <input type="text" {...register("purpose")} />
          </label>
          <button>Save Changes</button>
        </form>
      </aside>
    </div>,
    document.body
  );
};

export default AddEditInvoice;
