import logoBg from "../../../assets/img/logoBg.svg";
import oval from "../../../assets/img/Oval.png";

const SideBar = () => {
  return (
    <div className=" flex flex-col  justify-between w-1/12 items-center  h-screen rounded-r-[2rem]  bg-[#373B53]">
      <div>
        {" "}
        <img className="w-[10rem]" src={logoBg} alt="logoBg" />
      </div>
      <div className="mb-[2.5rem]">
        <img className="w-[4rem]" src={oval} alt="oval" />
      </div>
    </div>
  );
};

export default SideBar;
