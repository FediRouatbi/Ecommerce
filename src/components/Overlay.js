import React, { useContext } from "react";
import Images from "./Images";
import { IoMdClose, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
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
          <Images />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
