import React from 'react'
import Segment from './segment.jsx'
import Blockfi from './blockfi.png'
import Crypto from './crypto.com.png'
import Brave from './brave.png';
import Coinbase from './Coinbase.png';
import Bittrex from './Bittrex.png';
import Changelly from './changelly.png';
import Liquid from './liquid.png';
import Binance from './binance.png';

function FeaturedPartners (props) {
    return (
        <div>
            <br />
            <h1>Featured Websites -</h1>
            <p>These are the top sites in Crypto, 
                and we are getting you free Crypto for using them!
            </p>
            <Segment  imgSrc={Bittrex} alt="" title="Bittrex the most trusted cryptocurrenxy exchange" 
            para="Renowned for its next-level security, Bittrex also bosts extremely fast and robust trading. On top of all that you can trade in over 500 markets with Bittrex." website="Get
             Started on Bittrex" 
             link="https://global.bittrex.com/Account/Register?referralCode=OV0-0IJ-3VW" />
             <br />
             <br />
            <Segment  imgSrc={Crypto} alt="" title="Get $50 free with Crypto.com" 
            para="Perhaps the fastest growing Crypto Exchange. 
            Dozens of trading pairs, high liquidity and 
            lots of chances to win free 
            crypto through staking or lending." website="Get
             Started on Crypto.com" 
             link="https://crypto.com/exch/xjgvhg8t7q" />
             <br />
             <br />
            <Segment  imgSrc={Coinbase} alt="" title="Get $10 free with Coinbase!" 
            para="You will get $10 of Bitcoin free, all you have to do is sign up using our link and spend $100! Coinbase is one of the most popular exchanges for buying and selling the top Crypto-Currencies!" website="Get
             Started with Coinbase" 
             link="https://www.coinbase.com/join/tillot_ew" />
            <Segment  imgSrc={Changelly} alt="" title="Changelly: the simplest site for purchasing Crypto Currency" 
            para="Trade 150+ Cryptocurrencies with 24/7 live-chat support. Changelly is non-custodial (meaning that no users funds were placed on the users)." website="Get
             Started with Changelly" 
             link="https://changelly.com/?ref_id=weykqy52ocmfsdzq" />
            <Segment  imgSrc={Liquid} alt="" title="Get 10% off their trading fees with Liquid" 
            para="The worlds most comprehensive and secure trading platform. Buy and sell Bitcoin, Ethereum, XRP and many other cryptocurrencies with fiat or crypto." website="" 
             link="https://www.liquid.com/sign-up/?affiliate=qpC5h-1A772363" website="Get Started with Liquid" />
            <Segment  imgSrc={Blockfi} alt="" title="Get $10 free when you deposit $100 with Blockfi" 
            para="Earn interest, borrow cash and trade crypto all from the same site. You can earn as much as 8.6% from just having your crypto in Blocki, and then can buy and sell from the website too!" website="Get
             Started with Blockfi" 
             link="https://blockfi.com/?ref=4d95f275" />
            <Segment  imgSrc={Binance} alt="" title="Get 10% off all your fee's forever with Binance" 
            para="2.0 bn is the average daily volume, 1,400,000+ transactions per second and with 24/7 support" 
             link="https://www.binance.com/en/register?ref=PZLLOMXT" website="Get Started with Binance" />

      
        </div>
    )
}

export default FeaturedPartners;

