import React, { useState } from "react";
import Board from "./Board";

const initialEmojis = [
  { value: "😂", found: false },
  { value: "😍", found: false },
  { value: "😁", found: false },
  { value: "🤩", found: false },
  { value: "🥳", found: false },
  { value: "🤯", found: false },
  { value: "😎", found: false },
  { value: "🙈", found: false }
];

const Game = () => {
  const [emojis, setEmojis] = React.useState();
  const [firstOpen, setFirstOpen] = useState(null);
  const [secondOpen, setSecondOpen] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(0);

  const startTimer = () => {
    let counter = 0;
    let interval = setInterval(() => {
        counter++;
        setWidth(counter / 3);
        if (counter === 300) {
          clearInterval(interval);
          setEmojis(null);
        }
      }, 100);
  };

  const shuffleValues = () => {
    startTimer();
    resetChoices();
    setEmojis(
      [...initialEmojis, ...initialEmojis]
        .sort(() => Math.random() - 0.5)
        .map((emoji, index) => {
          return { ...emoji, id: index };
        })
    );
    setCount(16);
  };

  const resetChoices = () => {
    setFirstOpen(null);
    setSecondOpen(null);
    setDisabled(false);
  };

  const clickHandler = (value) => {
    if (!disabled) {
      firstOpen !== null ? setSecondOpen(value) : setFirstOpen(value);
    }
  };

  React.useEffect(() => {
    if (firstOpen !== null && secondOpen !== null) {
      setDisabled(true);
      let tempValues = [...emojis];
      if (firstOpen.value === secondOpen.value) {
        tempValues[firstOpen.id].found = true;
        tempValues[secondOpen.id].found = true;
        setCount(count - 2);
        setEmojis(tempValues);
      }
      setTimeout(() => resetChoices(), 1200);
    }
  }, [firstOpen, secondOpen]);

  return (
    <div>
      {!emojis && <button type="button" onClick={shuffleValues}>
        Start New Game
      </button>}
      {/* {count === 0 && (emojis!==undefined) && <p>Congratulations, You did it!</p>}
      {count !== 0 && width === 100 && <p>You Lost the Game</p>} */}
      {count !== 0 && width !== 100 && ( 
        <>
          <div className="progress-bar">
            <div
              className="progress-complete"
              style={{ width: `${width}%` }}
            ></div>
          </div>
          <p>Cards Left : {count}</p>
          <Board
            emojis={emojis}
            clickHandler={clickHandler}
            firstOpen={firstOpen}
            secondOpen={secondOpen}
          />
        </>
      )}
    </div>
  );
};

export default Game;
