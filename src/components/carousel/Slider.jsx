import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import games from "/public/api/Games";
import { HiMiniPause } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsPlayFill } from "react-icons/bs";
import TitleSection from "../title-section/TitleSection";
import Header from "../header/Header";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

export default function Slider() {
  const [isOpen, setIsOpen] = useState([]);
  const [data, setData] = useState(games);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleModal = index => {
    const updatedIsOpen = { ...isOpen };
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  return (
    <>
      <section
        className="flex flex-col items-center w-[1050px] custom-shadow my-5 max-sm:w-full"
        id="center"
      >
        <Header />

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 35,
            stretch: 250,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
            loop={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="gameSwiper"
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={item._id} className=" text-white relative">
                <div data-aos="zoom-in" className="game-slider  ">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-3xl"
                  />
                  <div className="absolute left-5 bottom-8 text-left w-3/4 z-10">
                    <h1 className="title">{item.title}</h1>
                    <p className="text-xs mt-2"> {item.description}</p>{" "}
                    <div className="flex gap-5 mt-4">
                      <button className="bg-[#0c8b9f] w-[150px] h-[50px] rounded-lg uppercase font-[800] cursor-pointer">
                        Order Now
                      </button>
                      <div
                        onClick={() => toggleModal(index)} // Toggle modal for this slide
                        className=" flex  items-center  justify-center w-[50px] h-[50px] bg-[#706f6f5b] rounded-full"
                      >
                        {isOpen[index] ? (
                          <HiMiniPause />
                        ) : (
                          <BsPlayFill className="text-4xl cursor-pointer" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {isOpen[index] && (
                  <section
                    data-aos="zoom-in"
                    id="isModalOpen"
                    className="w-[350px] h-[180px] absolute top-0 rounded-t-2xl rounded-bl-2xl z-10 right-20  bg-white shadow-xl"
                  >
                    <iframe
                      width="350"
                      height="180"
                      src={item.trailer}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded-tr-2xl rounded-bl-2xl custom-shadow "
                    ></iframe>
                  </section>
                )}{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <TitleSection />
      </section>
    </>
  );
}
