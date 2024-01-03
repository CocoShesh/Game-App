import React from "react";
import Slider from "./carousel/Slider";
import SideMenu from "./sidebar/SideMenu";

const Home = () => {
  return (
    <>
      <main className=" main flex h-[780px] w-full  max-md:h-[1100px] max-md:w-auto  ">
        <SideMenu />
        <Slider />
      </main>
    </>
  );
};

export default Home;
