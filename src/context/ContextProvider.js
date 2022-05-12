import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const Data = createContext();

const ContextProvider = ({ children }) => {
  const [current, setCurrent] = useState(1);
  const [cart, setCart] = useState([]);

  const addItem = () => {
    setCurrent((prev) => prev + 1);
  };
  const minusItems = () => {
    if (!current) return;
    setCurrent((prev) => prev - 1);
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

  return (
    <Data.Provider value={{ current, cart, addItem, minusItems, addToCart }}>
      {children}
    </Data.Provider>
  );
};

export default ContextProvider;
