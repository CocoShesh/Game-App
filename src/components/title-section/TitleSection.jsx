import React, { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Cards from "../GameCards/Cards";
import AOS from "aos";
import "aos/dist/aos.css";
const TitleSection = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <section
        data-aos="fade-up"
        className="flex  justify-between w-full text-white my-4 px-5 font-[700] "
      >
        <h1 className="text-2xl uppercase "> Games on Promotion </h1>

        <p className="flex items-center text-lg  gap-3">
          <a href="">View More Games </a>
          <AiOutlineArrowRight />
        </p>
      </section>
      <Cards />
    </>
  );
};

export default TitleSection;
