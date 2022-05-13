import React, { useContext } from "react";
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
import { Data } from "../context/ContextProvider";

const Overlay = () => {
  const { closeOverlay, currentImage, next, prev, chnageTo } = useContext(Data);
  return (
    <div className="overlay hidden" onClick={(e) => closeOverlay(e)}>
      <div className="image hidden">
        <div className="image__close">
          <IoMdClose
            className="close"
            size={30}
            onClick={(e) => closeOverlay(e)}
          />
        </div>

        <div className="relativ">
          <img
            src={require(`../images/image-product-${currentImage}.jpg`)}
            className="bigimage"
          />

          <div className="next" onClick={() => next()}>
            <IoIosArrowForward size={30} />
          </div>
          <div className="previous" onClick={() => prev()}>
            <IoIosArrowBack size={30} />
          </div>
        </div>

        <div className="pics" onClick={(e) => chnageTo(e)}>
          <img src={small1} id={1} />
          <img src={small2} id={2} />
          <img src={small3} id={3} />
          <img src={small4} id={4} />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
