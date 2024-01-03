import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCart, setIsCart] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);
  const maxItems = 3;

  const addToCart = cart => {
    if (isCart.some(existingItem => existingItem._id === cart._id)) {
      return;
    }

    const cartItem = { ...cart, cartNumber: nextNumber };
    setIsCart(prevItems => {
      const bag = [...prevItems, cartItem];
      setNextNumber(prevNumber => prevNumber + 1);
      window.localStorage.setItem("shopping-bag", JSON.stringify(bag));
      return bag;
    });
  };

  const handleDeleteBag = items => {
    const filteredItems = isCart.filter(item => item._id !== items);
    setIsCart(filteredItems);
    window.localStorage.setItem("shopping-bag", JSON.stringify(filteredItems));
    return filteredItems;
  };
  useEffect(() => {
    const data = window.localStorage.getItem("shopping-bag");
    if (data) {
      setIsCart(JSON.parse(data));
    }
  }, []);

  const addToLibrary = item => {
    if (items.some(existingItem => existingItem._id === item._id)) {
      return;
    }
    setItems(prevItems => {
      const updatedCart = [...prevItems, item];
      window.localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  useEffect(() => {
    const data = window.localStorage.getItem("cart");
    if (data) {
      setItems(JSON.parse(data));
    }
  }, []);

  const handleDeleteItem = id => {
    const filteredItems = items.filter(item => item._id !== id);
    setItems(filteredItems);
    window.localStorage.setItem("cart", JSON.stringify(filteredItems));
    return filteredItems;
  };
  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        addToLibrary,
        isCart,
        setIsCart,
        addToCart,
        handleDeleteItem,
        handleDeleteBag,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
