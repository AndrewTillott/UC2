import React from 'react'
import Segment from './segment.jsx'
import Blockfi from './blockfi.png'
import Crypto from './crypto.com.png'
import Brave from './brave.png'

function featured(props) {
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
            para="Perhaps the fastest growing Crypto Exchange. 
            Dozens of trading pairs, high liquidity and 
            lots of chances to win free 
            crypto through staking or lending." website="Get
             Started on Crypto.com" 
             link="https://crypto.com/exch/xjgvhg8t7q" />
             <br />
             <br />
            <Segment  imgSrc={Brave} alt="" title="Get Crypto 
            free for surfing the internet" 
            para="The Brave browser is super fast, it integrates 
            with your favourite browser (like Chrome)
             and it pays you free crypto for surfing the internet." website="Get
             Started with the Brave Browser" 
             link="https://brave.com/mtu788" />

      
        </div>
    )
}

export default featured

