import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addInvoice } from "../store/slices/invoicesSlice";
import { Link } from "react-router-dom";
const AddEditInvoice = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return ReactDOM.createPortal(
    <div className="w-[44.9375rem] h-full">
      <Link to={"/"}>Go Back</Link>
      <aside>
        <form onSubmit={handleSubmit((data) => dispatch(addInvoice(data)))}>
          <h2>
            <p>Edit: #ID</p>
          </h2>
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
