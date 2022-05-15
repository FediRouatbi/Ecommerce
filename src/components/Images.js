import React from "react";
import small1 from "../images/image-product-1-thumbnail.jpg";
import small2 from "../images/image-product-2-thumbnail.jpg";
import small3 from "../images/image-product-3-thumbnail.jpg";
import small4 from "../images/image-product-4-thumbnail.jpg";
const Images = () => {
  return (
    <>
      <img src={small1} id={1} className="active" alt="" />
      <img src={small2} id={2} alt="" />
      <img src={small3} id={3} alt="" />
      <img src={small4} id={4} alt="" />
    </>
  );
};

export default Images;
