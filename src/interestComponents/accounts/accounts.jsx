import React from 'react';
import Segment from './segment.jsx';
import Blockfi from './blockfi.png';
import Crypto from './crypto.com.png';
import Celsius from './celsius.png';

function Accounts(props) {
    return (
        <div>
            <br />
            <h1>Featured Websites -</h1>
            <p>These are the top sites in Crypto, 
                and we are getting you free Crypto for using them!
            </p>
            <Segment  imgSrc={Blockfi} alt="" title="Get $10 free with Blockfi" 
            para="What's the interest rate on the money 
            in your bank account. Chances are its practically nothing. 
            With Blockfi you can 
            get up to 8.6% on your Crypto and you get $10 
            free when you sign up with our link." website="Get
             Started on Blockfi" 
             link="https://blockfi.com/?ref=4d95f275" />
             <br />
             <br />
            <Segment  imgSrc={Crypto} alt="" title="Get $50 free with Crypto.com" 
            para="Crypto.com is much more than just an exchange, you can earn interest on a huge range of Crypto Currencies, like Elrond, Chainlink, Cardano and more!" website="Get
             Started on Crypto.com" 
             link="https://crypto.com/exch/xjgvhg8t7q" />
             <br />
             <br />
            <Segment  imgSrc={Celsius} alt="" title="Get Paid The Highest Interest Rates" 
            para="Celsius has been growing rapidly recently. This might be because their interest rates are amongst the highest around. You can earn over 9% interest on Ethereum!" website="Get
             Started with the Brave Browser" 
             link="https://brave.com/mtu788" />

      
        </div>
    )
}

export default Accounts;
