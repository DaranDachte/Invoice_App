import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";

const Container = () => {
  return (
    <div className=" h-full bg-[#F8F8FB]">
      <SideBar />
      <Content />
    </div>
  );
};

export default Container;
