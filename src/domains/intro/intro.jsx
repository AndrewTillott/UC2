import React, {Component} from "react";
import "./intro.css";
import cryptoDomains from '../video/unstoppable domain domains crypto.svg';
import MainBtn from '../misc/mainBtn.jsx';

 /* Need to add Link so that you can navigate pages and you need to fix the state management issue here. */

class Intro extends Component {
        constructor(props){
            super(props);
            this.state = {
   
            }
        }
        render(){
        return(
            <div className="outer-container">
                <div className="container">
                    <div className="side-text">
                        <h1>Get $10 <a href="https://unstoppabledomains.com/r/e35926c0d45f4cc" target="_blank" className="blue-text pointer">Free</a> <span className="">With Unstoppable Domains</span></h1>
                        <p>Unstoppable Domains are the biggest up and coming NFT's!</p>
                        <p><a className="blue-text pointer" target="_blank" href="https://unstoppabledomains.com/r/e35926c0d45f4cc">.crypto</a> domains might be the next <a className="blue-text pointer" target="_blank" href="https://unstoppabledomains.com/r/e35926c0d45f4cc">.com</a> domains! Get yours now, before they get bought up!</p>
                </div>
                
                        <img className="side-image" src={cryptoDomains} alt="bitcoin tree of free cryptocurrency crypto" />
                </div>
               {/* <span className="button-change">
                    <MainBtn name="Sign Up" />
        </span> */}
        </div>
        )

    }
}

export default Intro;