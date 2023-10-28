import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import backToList from "../assets/img/backToList.svg";
const Details = () => {
  const adress = " 123 sdfdsf 34r dsff";

  const navigate = useNavigate();

  const invoices = useSelector((state) => state.invoices);
  const { id } = useParams();

  const invoiceDetails = invoices.filter((invoice) => invoice.id === id)[0];

  return (
    <div className="  w-[45.625rem]  my-0 mx-auto">
      <div className="flex" onClick={() => navigate(-1)}>
        <img src={backToList} alt="backToList" />
        <div>
          <p>Go Back</p>
        </div>
      </div>
      <div className="flex ">
        <div className="flex w-1/2">
          <div>Status</div>
          <div>{invoiceDetails.paymentState}</div>
        </div>
        <div className="flex w-1/2">
          <div>Edit</div>
          <div>Delete</div>
          <div>Mark as Paid</div>
        </div>
      </div>
      <div>
        <div>
          <div>#{invoiceDetails.id}</div>
          <div>{invoiceDetails.purpose}</div>
        </div>
        <div>
          <div>{adress}</div>
        </div>
        <div>Invoice Date:{invoiceDetails.date}</div>
        <div>
          Bill to:{invoiceDetails.name}
          {invoiceDetails.surname}
        </div>
        <div>Sent To</div>
        <table>
          <tr>
            <th>Item Name</th>
            <th>QTY</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          {invoiceDetails.items.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td>{item.qty * item.price}</td>
              </tr>
            );
          })}
        </table>
        <div className="flex">
          <div>Amount Due</div>
          <div>
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
