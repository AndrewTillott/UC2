import React, {Component} from "react";
import "./interest.css";
import wallet from './wallet.svg';


 /* Need to add Link so that you can navigate pages and you need to fix the state management issue here. */

class Interest extends Component {
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
                        <h1>Earn <a href="" className="blue-text">Free</a> <span className="">Crypto-Currency</span></h1>
                        <p>It's this simple! You get paid Crypto to sign up for
                             an account, and then you get paid high interest 
                             to keep your crypto there!</p>
                        <p>Get as much as 8.6% interest <a className="blue-text" href="">below</a></p>
                        
                </div>
                
                        <img className="side-image" src={wallet} alt="bitcoin tree of free cryptocurrency crypto" />
                </div>
               {/* <span className="button-change">
                    <MainBtn name="Sign Up" />
        </span> */}
        </div>
        )

    }
}

export default Interest;