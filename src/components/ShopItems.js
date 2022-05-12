import React, { useContext } from "react";
import { IoMdTrash } from "react-icons/io";
import small1 from "../images/image-product-1-thumbnail.jpg";
import { Data } from "../context/ContextProvider";
const ShopItems = () => {
  const { cart } = useContext(Data);
  const displayNone = () => {
    const shop = document.querySelector(".navbar__shop--onhover");

    setTimeout(() => {
      shop.style.display = "none";
      shop.stylle.opacity = "0";
    }, 500);
  };
  return (
    <div className="navbar__shop--onhover" onMouseLeave={() => displayNone()}>
      <p className="cart">Cart</p>
      <div className="items">
        {cart.map((el) => {
          return (
            <div className="item" key={el.id} id={el.id}>
              <img src={small1}></img>
              <p>
                Fall Limeted Edition Sneakers
                <div>
                  $125.00 x {el.current} <strong> ${el.total}</strong>
                </div>
              </p>
              <IoMdTrash size={30} className="trash" />
            </div>
          );
        })}
        <button className="items__checkout">Checkout</button>
      </div>
    </div>
  );
};

export default ShopItems;
