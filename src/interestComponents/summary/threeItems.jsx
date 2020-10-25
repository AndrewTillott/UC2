import React from 'react';
import './summary.css';

const ThreeItems = (props) => {
    return (
        <>
            <div className="item">
                <span><img className="three-images" src={props.image1} /></span>
                <h3>{props.title}</h3>
                <div>{props.para1}</div>
                <div>{props.para2}</div>
                <br />
                <a href={props.link} 
                target="_blank">{props.try}</a>
            </div> 
        </>
    )
}

export default ThreeItems;