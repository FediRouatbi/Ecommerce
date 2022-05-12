import "./main.scss";
import React, { useContext } from "react";
import small1 from "../images/image-product-1-thumbnail.jpg";
import small2 from "../images/image-product-2-thumbnail.jpg";
import small3 from "../images/image-product-3-thumbnail.jpg";
import small4 from "../images/image-product-4-thumbnail.jpg";

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
              />
            </div>
            <div className="grid__section1--proto" onClick={(e) => chnageTo(e)}>
              <img src={small1} id={1} className="active" />
              <img src={small2} id={2} />
              <img src={small3} id={3} />
              <img src={small4} id={4} />
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
              $125.00
              <span className="grid__section2--pricing-now-discount">50%</span>
            </div>
            <div className="grid__section2--pricing-before">$250.00</div>
          </div>
          <div className="grid__section2--buttons">
            <div className="grid__section2--buttons-numberofitems">
              <button onClick={() => minusItems()}>
                <Minus />
              </button>
              <div>{current}</div>
              <button onClick={() => addItem()}>
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
