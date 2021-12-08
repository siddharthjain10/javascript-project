import React, { useState } from 'react';
import './TicTacToe.css';
import Board from '../../components/TicTacToe/Board';
import getWinner from './Logic';

function TicTacToe() {
  const [record, setRecord] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const xO = isXNext ? 'X' : 'O';
  const winner = getWinner(record);

  const resetGame = () => {
    setRecord(Array(9).fill(null));
    setIsXNext(true);
  };

  const clickHandler = (i) => {
    // if winner exist or square is already occupied
      if(winner || record[i]) return;
      let tempRecord = record;
      tempRecord[i] = xO;
      setRecord(tempRecord);
      setIsXNext(!isXNext);
      if(!record.includes(null)) resetGame();
  }

  return (
    <div className="TicTacToe">
      <div className="container-item">
        <h1 className='game-heading'>Tic Tac Toe</h1>
        {winner!==null && <h1>Congratulations, Player {winner} won the match.</h1>}
        <div>
          <button onClick={resetGame}>Reset Game</button>
        </div>
      </div>
      {winner===null && 
        <div>
          <h2>Player {xO} chance</h2>
          <Board clickHandler={clickHandler} record={record}/>
        </div>}
    </div>
  );
}

export default TicTacToe;
