import React from 'react';
import s from './Square.module.css';

function Square(props){
    return(
        <div id={props.id} className={s.Square} onClick={props.onClick}>
            <h1>{props.type}</h1>
        </div>
    )
}

export default Square;