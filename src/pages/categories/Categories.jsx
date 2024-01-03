import React, { useContext, useEffect, useState } from "react";
import SideMenu from "../../components/sidebar/SideMenu";
import Header from "../../components/header/Header";
import { AiFillStar, AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import { BsBagPlusFill } from "react-icons/bs";
import CartContext from "../../CartContext";
import Aos from "aos";
import "aos/dist/aos.css";
const stars = [<AiFillStar />, <AiFillStar />, <AiFillStar />];
const categ = ["ALL", "RPG", "MOBA", "Battle", "Racing", "Fighting"];

const Categories = () => {
  const [url, setUrl] = useState([]);
  const [isInput, setIsInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const { items, addToLibrary, addToCart } = useContext(CartContext);

  const handleClick = category => {
    setSelectedCategory(category);
  };

  const filteredItems = url.filter(item => {
    const categoryFilter =
      selectedCategory === "ALL" || item.category === selectedCategory;
    const searchFilter =
      isInput === "" ||
      item.title.toLowerCase().includes(isInput.toLowerCase());
    return categoryFilter && searchFilter;
  });
  const handleUrl = () => {
    const data = "/public/api/gamesData.json";

    fetch(data)
      .then(response => response.json())
      .then(data => setUrl(data));
  };

  useEffect(() => {
    handleUrl();
    Aos.init();
  }, []);

  return (
    <>
      <main className=" main flex h-[780px] w-full  max-md:h-[1420px] ">
        <SideMenu />
        <div
          className="flex flex-col w-[1050px] custom-shadow my-5  "
          id="center"
        >
          <Header />
          <section
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
          >
            <section className="text-white flex gap pl-5 pt-2 w-full justify-between  items-center  max-md:flex-col   max-md:items-start max-md:px-2">
              <section>
                {categ.map((categ, index) => {
                  return (
                    <button
                      key={index}
                      className={`w-[90px] font-[800] text-sm rounded-lg h-[40px] uppercase max-md:text-xs  max-md:w-[70px] ${
                        selectedCategory === categ ? "custom-shadow" : ""
                      }`}
                      onClick={() => handleClick(categ)}
                    >
                      {categ}
                    </button>
                  );
                })}
              </section>
              <div className="mr-5 relative max-sm:mt-5 max-md:left-20 ">
                <input
                  type="search"
                  onChange={e => setIsInput(e.target.value)}
                  placeholder="Search"
                  className="bg-transparent outline-none custom-shadow rounded-lg h-[40px] pl-10 input font-[800] "
                />
                <AiOutlineSearch className="absolute top-[10px] left-4 text-xl  brightness-75" />
              </div>
            </section>
            <section className="grid grid-cols-4 my-5 mx-5 text-white gap-4  max-md:grid-cols-2">
              {filteredItems.map(item => {
                return (
                  <section
                    key={item._id}
                    className="w-auto h-[280px] px-3 pt-2 custom-shadow relative"
                  >
                    <div className="absolute right-0 text-2xl top-0 bg-[#15222c] rounded-bl-3xl h-[40px] w-[50px]">
                      <AiFillHeart
                        className={`absolute right-3 top-2 ${
                          items.some(
                            libraryItem => libraryItem._id === item._id
                          )
                            ? "text-red-800"
                            : ""
                        }`}
                        onClick={() => addToLibrary(item)}
                      />
                    </div>
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-[110px]  object-cover rounded-xl"
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
                      <BsBagPlusFill
                        className="absolute  bottom-1 right-1 text-white"
                        onClick={() => addToCart(item)}
                      />
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

export default Categories;
