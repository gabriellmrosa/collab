import React from 'react';
// import './styles.css'
import SquareCollab from '../SquareCollab/index'

const SquareCollabs = (qtd) =>{
    let max = qtd;
    const squares =[];

    while(max--){
        squares.push(<SquareCollab key={max}/>)
    }

    return squares
}

const BoardCollab =( props) => (
    <article>{SquareCollabs(props.qtd)}</article>
);

export default BoardCollab;
