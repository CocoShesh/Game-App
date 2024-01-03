import React, { useContext, useState } from "react";
import SideMenu from "../../components/sidebar/SideMenu";
import Header from "../../components/header/Header";
import CartContext from "../../CartContext";
const stars = [<AiFillStar />, <AiFillStar />, <AiFillStar />];
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { BsBagPlusFill } from "react-icons/bs";
const MyLibrary = () => {
  const { items, setItems, handleDeleteItem } = useContext(CartContext);

  const deleteItem = item => {
    handleDeleteItem(item);
  };
  return (
    <>
      <main className=" main flex h-[780px] w-full  ">
        <SideMenu />
        <div
          className="flex flex-col w-[1050px] custom-shadow my-5  "
          id="center"
        >
          <Header />
          <section
            data-aos="fade-up"
            className="text-4xl text-white font-[800] pl-5 pt-2 max-md:px-2"
          >
            <h1> My Library</h1>

            <section className="grid grid-cols-4 my-5 mx-5 text-white gap-4  max-md:grid-cols-2 max-md:mx-0  ">
              {items.map(item => {
                return (
                  <section
                    key={item._id}
                    className="w-auto h-[280px] px-3 pt-2 custom-shadow relative text-sm max-md:w-auto"
                  >
                    <div className="absolute right-0 text-2xl top-0 bg-[#15222c] rounded-bl-3xl h-[40px] w-[50px]">
                      <AiFillHeart
                        className="absolute right-3 top-2 fill-red-800"
                        onClick={() => handleDeleteItem(item._id)}
                      />
                    </div>
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-[110px]  object-cover rounded-xl"
                    />
                    <div className=" h-[40px]  flex items-center  justify-between w-full rounded-md mt-2 text-sm">
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
                    <div className="mt-3 text-sm">
                      <h1 className="font-[800] uppercase text-[16px] max-md:text-sm">
                        {" "}
                        {item.title}
                      </h1>
                      <div className="flex justify-between mt-2 font-[800] ">
                        <span className="bg-[#b40405] p-[2px] rounded-md">
                          {item.discount * 100}%
                        </span>
                        <span className="text-[#9a121795] line-through ">
                          {item.price}
                        </span>
                        <span>{(item.price * item.discount).toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="absolute right-0 bottom-0 rounded-tl-2xl text-lg bg-[#0a8b9d] cursor-pointer h-[30px] w-[30px]">
                      <BsBagPlusFill className="absolute  bottom-1 right-1 text-white" />
                    </div>
                  </section>
                );
              })}
            </section>
          </section>
        </div>
      </main>
    </>
  );
};

export default MyLibrary;
