import React, { useContext } from "react";
import SideMenu from "../../components/sidebar/SideMenu";
import Header from "../../components/header/Header";
import CartContext from "../../CartContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdShoppingCartCheckout } from "react-icons/md";
const Bag = () => {
  const { isCart, handleDeleteBag } = useContext(CartContext);

  const handleDelete = item => {
    handleDeleteBag(item);
  };

  const totalAmount = isCart.reduce(
    (total, item) => total + item.price * item.discount,
    0
  );
  return (
    <>
      <main className=" main flex h-[780px]  w-full  ">
        <SideMenu />
        <div
          className="flex flex-col w-[1050px] custom-shadow my-5   "
          id="center"
        >
          <Header />
          <section
            data-aos="fade-up"
            className="text-4xl text-white font-[800]  px-5 pt-2   overflow-y-scroll"
          >
            <h1> My Bag</h1>

            <section className="text-sm grid grid-cols-7 mt-10 text-center uppercase items-center custom-shadow h-[50px] rounded-lg">
              <div className="border-r-2 border-slate-700"> No</div>
              <div className="border-r-2 border-slate-700">Preview</div>
              <div className="border-r-2 border-slate-700">Game</div>
              <div className="border-r-2 border-slate-700">Price</div>
              <div className="border-r-2 border-slate-700">Discount</div>
              <div className="border-r-2 border-slate-700">Total Amount</div>
              <div>Action</div>
            </section>
            <section>
              {isCart.map(item => {
                return (
                  <div
                    key={item._id}
                    className="text-lg grid grid-cols-7 mt-5 mb-5  gap-5 w-full text-center  items-center custom-shadow p-5  "
                  >
                    <div> {item.cartNumber}</div>
                    <div>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-auto rounded-xl object-contain "
                      />
                    </div>
                    <div> {item.title}</div>
                    <div> ${item.price}</div>
                    <div> {item.discount * 100}%</div>
                    <div>{item.discount * item.price.toFixed(2)}</div>
                    <div className="flex items-center justify-center text-3xl">
                      <RiDeleteBin5Line
                        onClick={() => handleDelete(item._id)}
                      />
                    </div>
                  </div>
                );
              })}
            </section>

            {isCart <= 0 ? (
              " "
            ) : (
              <section className="flex text-lg gap-5 justify-between uppercase mt-5 items-center">
                <p>Total Items: {isCart.length}</p>

                <div className="flex gap-5 items-center">
                  <p>
                    Total:{" "}
                    <span className="text-[#f05d40] "> ${totalAmount}</span>
                  </p>
                  <button className="flex items-center gap-3 w-[150px] h-[50px] bg-[#f05d40] justify-center  uppercase rounded-md">
                    {" "}
                    Checkout <MdShoppingCartCheckout />{" "}
                  </button>
                </div>
              </section>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default Bag;
