import React, { useState } from "react";
import PRODUCTSDATA from "./PRODUCTSDATA";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  function addToCart(id) {
    const thisProduct = PRODUCTSDATA.find((item) => item.id == id);
    const checkCart = cartItems.includes(thisProduct);

    if (!checkCart) {
      thisProduct.qty = 1;
      setCartItems((prevItems) => [...prevItems, thisProduct]);
    } else if (thisProduct.qty <= 4) {
      let findItem = cartItems.find((item) => item.id == id);
      findItem.qty += 1;
    } else {
      return;
    }
  }

  function updateQty(id, qty) {
    let data = [...cartItems];
    let index = data.findIndex((obj) => obj.id === id);
    data[index].qty = qty;
    setCartItems(data);
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleOpenCart() {
    setOpenCart(!openCart);
  }

  return (
    <Context.Provider
      value={{
        cartItems,
        addToCart,
        updateQty,
        removeFromCart,
        openCart,
        handleOpenCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
