import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";

const Container = () => {
  return (
    <div className=" flex h-full bg-[#F8F8FB]">
      <SideBar />
      <Content />
    </div>
  );
};

export default Container;
