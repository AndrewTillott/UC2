import React, {Component} from "react";
import "./intro.css";
import CryptoTreasure from './cryptotreasure.svg';
import MainBtn from '../misc/mainBtn.jsx';
import Bitcoin from './bitcoin.svg';

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
                        <h1>Receive <a href="" className="blue-text">Over $150 Free</a> <span className="">Crypto-Currency In Two Steps</span></h1>
                        <p>1. Sign to Coinbase using our Link Below.</p>
                        <p>2. Watch a few of the Coinbase Earn Videos from our <a className="blue-text" href=""> link below.</a> Just follow the Steps below the video!</p>
                </div>
                
                        <img className="side-image" src={Bitcoin} alt="bitcoin tree of free cryptocurrency crypto" />
                </div>
               {/* <span className="button-change">
                    <MainBtn name="Sign Up" />
        </span> */}
        </div>
        )

    }
}

export default Intro;