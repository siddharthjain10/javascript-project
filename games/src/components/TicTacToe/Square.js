import React from "react";

const Square = ({ value, onClick }) => {
  const squareClassName = value
    ? (value === -1) ? "square empty" : `square ${value}`
    : "square";

  return (
    <button className={squareClassName} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
