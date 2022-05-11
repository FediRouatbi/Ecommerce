import React from "react";
import small1 from "../images/image-product-1-thumbnail.jpg";
import small2 from "../images/image-product-2-thumbnail.jpg";
import small3 from "../images/image-product-3-thumbnail.jpg";
import small4 from "../images/image-product-4-thumbnail.jpg";
import img1 from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";

import {
  IoMdClose,
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosCart,
} from "react-icons/io";
import "./overlay.scss";
const Overlay = () => {
  return (
    <div className="image hidden">
      <div className="image__close">
        <IoMdClose className="close" size={30} />
      </div>

      <div className="relativ">
        <img src={img1} className="bigimage" />

        <div className="next">
          <IoIosArrowForward size={30} />
        </div>
        <div className="previous">
          <IoIosArrowBack size={30} />
        </div>
      </div>

      <div className="pics">
        <img src={small1} />
        <img src={small2} />
        <img src={small3} />
        <img src={small4} />
      </div>
    </div>
  );
};

export default Overlay;
