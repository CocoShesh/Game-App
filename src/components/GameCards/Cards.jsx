import React, { useEffect, useState } from "react";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { BsBagPlusFill } from "react-icons/bs";
const stars = [<AiFillStar />, <AiFillStar />, <AiFillStar />];
import AOS from "aos";
import "aos/dist/aos.css";
const Cards = () => {
  const url = "/public/api/gamesData.json";
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    AOS.init();
    fetch(url)
      .then(response => response.json())
      .then(data => setGameData(data.slice(0, 4)))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="grid-cols-4 grid text-white gap-5 w-full px-5 mb-8 max-md:grid-cols-2 max-md:w-full  max-md:px-auto"
    >
      {gameData.map(item => (
        <section
          key={item._id}
          className="w-auto h-[300px] px-3 pt-2 custom-shadow relative"
        >
          <div className="absolute right-0 text-2xl top-0 bg-[#15222c] rounded-bl-3xl h-[40px] w-[50px]">
            <AiFillHeart className="absolute right-3 top-2" />
          </div>
          <img
            src={item.img}
            alt=""
            className="w-full h-[130px]  object-cover rounded-xl"
          />
          <div className=" h-[40px]  flex items-center  justify-between w-full rounded-md mt-2">
            <div className="w-[80px] h-[40px] rounded-md bg-[#0a8b9d] flex items-center justify-center font-[800] uppercase">
              {" "}
              {item.level}{" "}
            </div>
            <div className="flex items-center  text-xl gap-1">
              {stars.map((star, index) => {
                return (
                  <span key={index} className="text-[#06707e]">
                    {star}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="mt-3">
            <h1 className="font-[800] uppercase"> {item.title}</h1>
            <div className="flex justify-between mt-2 font-[800] ">
              <span className="bg-[#b40405] p-[2px] rounded-md">
                {" "}
                {item.discount * 100}%{" "}
              </span>
              <span className="text-[#9a121795] line-through ">
                {item.price}
              </span>
              <span>{(item.price * item.discount).toFixed(2)}</span>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 rounded-tl-2xl  bg-[#0a8b9d] cursor-pointer h-[30px] w-[30px]">
            <BsBagPlusFill className="absolute  bottom-1 right-1 text-white" />
          </div>
        </section>
      ))}
    </section>
  );
};

export default Cards;
