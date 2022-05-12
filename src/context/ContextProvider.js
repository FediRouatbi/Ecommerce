import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const Data = createContext();

const ContextProvider = ({ children }) => {
  const [current, setCurrent] = useState(1);
  const [cart, setCart] = useState([]);
  const [currentImage, setCurrentImage] = useState(1);

  const addItem = () => {
    setCurrent((prev) => prev + 1);
  };
  const minusItems = () => {
    if (current === 1) return;
    setCurrent((prev) => prev - 1);
  };
  const deleteItem = (e) => {
    setCart((prev) =>
      prev.filter((el) => e.target.parentElement.parentElement.id !== el.id)
    );
  };
  const addToCart = () => {
    const newItem = {
      id: uuidv4(),
      current,
      price: 125,
      name: "Fall Limite Edition Sneakers",
      total: 125 * current,
    };
    setCart((prev) => [...prev, newItem]);
  };
  const chnageTo = (e) => {
    for (let i of e.currentTarget.children) i.classList.remove("active");
    if (e.target === e.currentTarget) return;
    setCurrentImage(e.target.id);

    e.target.classList.add("active");
  };
  const viewOverlay = () => {
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".image").classList.remove("hidden");
  };
  const closeOverlay = (e) => {
    console.log(e.currentTarget, e.target);
    if (e.target !== e.currentTarget) return;
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector(".image").classList.add("hidden");
  };
  return (
    <Data.Provider
      value={{
        current,
        cart,
        currentImage,
        addItem,
        minusItems,
        addToCart,
        deleteItem,
        chnageTo,
        viewOverlay,
        closeOverlay,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default ContextProvider;
