import React from 'react';
import './styles.css'

const handleClick = (texto)=> () => console.log(texto)
const SquareCollab = () => <button className="square-collab" onClick={handleClick('coiso')}>x</button>

export default SquareCollab;
