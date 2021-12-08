import React from "react";
import Square from "./Square";

const Board = ({ emojis, clickHandler, firstOpen, secondOpen }) => {

  return (
    <div className="board grid-container">
      {emojis.map((emoji, index) => (
        <Square
          className="grid-item"
          key={index}
          emoji={emoji}
          clickHandler={() => clickHandler(emoji)}
          flip = {!(emoji.found) && (emoji===firstOpen || emoji===secondOpen)}
          found = {emoji.found}
        />
      ))}
    </div>
  );
};

export default Board;
