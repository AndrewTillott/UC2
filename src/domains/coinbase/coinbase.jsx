import React from 'react'
import "./coinbase.css";
import Domain from "./domain crypto eth bitcoin.svg"
import MainBtn from '../misc/mainBtn.jsx';

const Coinbase = props => {
    return (
        <div className="coinbase-feature">
       
      
            <div className="img-text">
                <span className="coin-container">
                    <span className="coin-text">
                        <h3 className="funk-text">"I believe that blockchain domains are a Million Dollar Opportunity"</h3>
                            <p className="funk-text">
                                Coin Bureau
                            </p>
                            <br />
                            <p className="below-text">
                                You will get $10 off 
                                your first domain purchase, all you have to 
                                do is use our <a href="https://unstoppabledomains.com/r/e35926c0d45f4cc" target="_blank">link!</a> Coinbase is one of the most 
                                popular exchanges for buying 
                                and selling the top Crypto-Currencies!
                            </p>
                            <br />
                        
                            <MainBtn link={'https://unstoppabledomains.com/r/e35926c0d45f4cc'}  name="Get Started" />
                            </span>
                            <br />
                            <br />
                                <img className="btc-image" src={Domain} alt="bitcoin tree of free cryptocurrency crypto" />
                    
                             </span>
               </div>
               
        </div>
    )
}

export default Coinbase
