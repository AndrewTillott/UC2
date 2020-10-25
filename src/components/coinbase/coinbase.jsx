import React from 'react'
import "./coinbase.css";
import Coinbase2 from "./coinbase bitcoin free crypto.svg"
import MainBtn from '../misc/mainBtn.jsx';

const Coinbase = props => {
    return (
        <div className="coinbase-feature">
       
      
            <div className="img-text">
                <span className="coin-container">
                    <span className="coin-text">
                        <h3 className="funk-text">"Coinbase is perhaps one of the
                            easiest on-ramps to crypto
                            investing. It is easy to sign
                            up and buy cryptocurrencies within
                            a matter of minutes."</h3>
                            <p className="funk-text">
                                Investopedia
                            </p>
                            <br />
                            <p className="below-text">
                                You will get $10 of 
                                Bitcoin free, all you have to 
                                do is sign up using our link
                                and spend $100! Coinbase is one of the most 
                                popular exchanges for buying 
                                and selling the top Crypto-Currencies!
                            </p>
                            <br />
                        
                            <MainBtn link={'https://www.coinbase.com/join/tillot_ew'}  name="Get Started" />
                            </span>
                            <br />
                            <br />
                                <img className="btc-image" src={Coinbase2} alt="bitcoin tree of free cryptocurrency crypto" />
                    
                             </span>
               </div>
               
        </div>
    )
}

export default Coinbase
