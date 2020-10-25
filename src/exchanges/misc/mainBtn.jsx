import React from 'react';
import './misc.css';

const MainBtn = (props) => {
    return (
    <a target="_blank" href="https://www.coinbase.com/join/tillot_ew"><button className="main-btn">{props.name}</button></a>
    )
}

export default MainBtn;
