import React, {Component} from "react";
import "./intro.css";
import CryptoTreasure from './cryptotreasure.svg';
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
                        <h1>Receive <a href="" className="blue-text">Free</a> <span className="">Crypto-Currency</span></h1>
                        <p>It's this simple! Unlimited Crypto
                                pays you free Crypto for signing up with our partners.</p>
                        <p>Check out our video <a className="blue-text" href="">below</a> to understand how it works!</p>
                </div>
                
                        <img className="side-image" src={CryptoTreasure} alt="bitcoin tree of free cryptocurrency crypto" />
                </div>
               {/* <span className="button-change">
                    <MainBtn name="Sign Up" />
        </span> */}
        </div>
        )

    }
}

export default Intro;