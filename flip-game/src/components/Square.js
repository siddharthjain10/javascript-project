import React from "react";
import "./Square.css";

const Square = ({ emoji, clickHandler, found, flip }) => {
  return (
    // Remoivng cards as soon as paired
    //if card is flipped
    <div className={found ? "" : "square"}>
      <div className={flip ? "flip" : ""}>
        {/* Face Card */}
        <span className="face">{emoji.value}</span>
        {/* Empty Side */}
        <span className="back" onClick={clickHandler}>
          {found ? "" : "Click"}
        </span>
      </div>
    </div>
  );
};

export default Square;
