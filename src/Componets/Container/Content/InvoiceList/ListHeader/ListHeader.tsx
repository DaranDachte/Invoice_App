import { Link } from "react-router-dom";

const ListHeader = () => {
  return (
    <div>
      <Link to={"/addNew"}>New Invoice</Link>
    </div>
  );
};

export default ListHeader;
