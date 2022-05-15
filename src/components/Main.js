import "./main.scss";
import React, { useContext } from "react";
import Images from "./Images";

import { ReactComponent as Minus } from "../images/icon-minus.svg";
import { ReactComponent as Plus } from "../images/icon-plus.svg";
import { IoIosCart } from "react-icons/io";
import { Data } from "../context/ContextProvider";

const Main = () => {
  const {
    current,
    addItem,
    minusItems,
    addToCart,
    currentImage,
    chnageTo,
    viewOverlay,
  } = useContext(Data);
  return (
    <main className="main">
      <div className="grid">
        <div className="try">
          <div className="grid__section1">
            <div className="grid__section1--image clicked ">
              <img
                onClick={() => viewOverlay()}
                src={require(`../images/image-product-${currentImage}.jpg`)}
                alt=""
              />
            </div>
            <div className="grid__section1--proto" onClick={(e) => chnageTo(e)}>
              <Images />
            </div>
          </div>
        </div>
        <div className="grid__section2">
          <div className="grid__section2--header">sneaker company</div>
          <h2 className="grid__section2--name">fall limite edition sneakers</h2>
          <p className="grid__section2--paragraph">
            These low-profile sneakers are your perfect casual wear
            companion.Featuring aa durable rubber outer soler , they'll
            withstand everything the weather can offer.
          </p>
          <div className="grid__section2--pricing">
            <div className="grid__section2--pricing-now">
              <div>$125.00</div>
              <span className="grid__section2--pricing-now-discount">50%</span>
            </div>
            <div className="grid__section2--pricing-before">$250.00</div>
          </div>
          <div className="grid__section2--buttons">
            <div className="grid__section2--buttons-numberofitems">
              <button className="minus" onClick={() => minusItems()}>
                <Minus />
              </button>
              <div>{current}</div>
              <button className="plus" onClick={() => addItem()}>
                <Plus />
              </button>
            </div>
            <div className="grid__section2--buttons-addtocard">
              <button onClick={() => addToCart()}>
                <IoIosCart />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
