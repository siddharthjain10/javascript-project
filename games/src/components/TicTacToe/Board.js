import React from 'react';
import Square from './Square';
import './Square.css';

const Board = ({record, clickHandler}) => {

    return (
        <div className="board">
        {record.map((value,index) => (
            <Square onClick={() => clickHandler(index)} value={value} key={index}/>
        ))
        }
        </div>
    )
}

export default Board;