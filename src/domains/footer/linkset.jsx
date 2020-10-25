import React from 'react'
import './footer.css';

const LinkSet = (props) => {
    return (
        <>
            <div>
                <h3 className="list-header">{props.title}</h3>
                <br />
                <ul>
                    <li className="links"><a target="_blank" href={props.link1}>{props.name1}</a></li>
                    <li className="links" ><a target="_blank" href={props.link2}>{props.name2}</a></li>
                    <li className="links" ><a target="_blank" href={props.link3}>{props.name3}</a></li>
                    <li className="links" ><a target="_blank" href={props.link4}>{props.name4}</a></li>
                    <li className="links" ><a target="_blank" href={props.link5}>{props.name5}</a></li>
                    <li className="links" ><a target="_blank" href={props.link6}>{props.name6}</a></li>
                    <li className="links" ><a target="_blank" href={props.link7}>{props.name7}</a></li>
                </ul>
            </div>
        </>
    )
}

export default LinkSet;