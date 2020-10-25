import React, {Component} from "react";
import "./intro.css";
import diamondCrypto from './crypto currency free bitcoin money.png';
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
                        <h1>Receive <a href="https://www.coinbase.com/join/tillot_ew" className="blue-text" target="_blank">Free</a> <span className="">Crypto-Currency</span></h1>
                        <p>It's this simple! Unlimited Crypto
                                pays you free Crypto for signing up with our partners.</p>
                        <p>Just use the <a className="blue-text" href="">links</a> on our site to sign up to the top Crypto-Currency Platforms, and get paid <a href="" target="blank">FREE</a> Crypto today!</p>
                </div>
                
                        <img className="side-image" src={diamondCrypto} alt="bitcoin tree of free cryptocurrency crypto" />
                </div>
               {/* <span className="button-change">
                    <MainBtn name="Sign Up" />
        </span> */}
        </div>
        )

    }
}

export default Intro;