import React from 'react'
import "./featured.css";

export default function Segment(props) {
    return (
        <div className="containers">
            <span className="site-image">
                <img target="_blank" className="site-image" src={props.imgSrc} />
            </span>
            <span className="site-text">
                <h2>{props.title}</h2>
                <p className="para">{props.para}</p>
                <a href={props.link} target="_blank">{props.website}</a>
            </span>
        </div>
    )
}
