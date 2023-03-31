import React from "react";
import "../Style/MyCard.css";
const Mycard = ({ image, name }) => {
  return (
    <div className="mycard">
      <img src={image} alt="logo" />
      <p>{name}</p>
    </div>
  );
};

export default Mycard;
