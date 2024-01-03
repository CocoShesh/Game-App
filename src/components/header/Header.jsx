import React, { useContext, useState } from "react";
import { BsSliders, BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import CartContext from "../../CartContext";
import { Badge } from "antd";
const Header = () => {
  const { items, isCart } = useContext(CartContext);
  const handleClose = () => {
    const first = document.querySelector("#first");
    const second = document.querySelector("#second");
    const center = document.querySelector("#center");

    first.classList.toggle("open");
    second.classList.toggle("close");
    center.classList.toggle("center");
  };

  return (
    <>
      <header className="flex justify-between items-center w-full  px-5 py-3 text-white font-[800]">
        <div>
          <BsSliders className="text-2xl" onClick={handleClose} />
        </div>
        <div className="flex items-center gap-5">
          <Badge count={items.length} showZero color="rgb(45, 183, 245)">
            <AiOutlineHeart className="text-2xl text-white" />
          </Badge>
          <Badge count={isCart.length} showZero color="rgb(45, 183, 245)">
            <BsBagCheck className="text-2xl text-white" />
          </Badge>
          <img
            src="/public/second_pic.jpg"
            alt=""
            className="w-[30px] h-[30px] rounded-full"
          />
          <div className="text-sm">
            <p className="uppercase">Coco</p>
            <p>Your Profile</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
