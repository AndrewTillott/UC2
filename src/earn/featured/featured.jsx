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
import Stellar from './stellar.png';
import EOS from './EOS.png';
import Comp from './comp.png';

function FeaturedPartners (props) {
    return (
        <div>
            <br />
            <h1>Free Crypto Here -</h1>
            <p>First Sign Up to <a href="https://www.coinbase.com/join/tillot_ew" target="_blank">Coinbase</a> and then use the <a href="https://coinbase.com/earn/comp/invite/jh0z2gqb" target="_blank">links below</a> to earn more Crypto just for watching short videos on Crypto
            </p>
            <Segment  imgSrc={Coinbase} alt="" title="First 
            Sign Up to Coinbase using our Link" 
            para="You will get $10 of Bitcoin free, all you 
            have to do is sign up using our 
            link and spend $100! Coinbase is one of 
            the most popular exchanges for buying and 
            selling the top Crypto-Currencies!" website="Get
            Started with Coinbase" 
            link="https://www.coinbase.com/join/tillot_ew" />
             <br />
             <br />
            <Segment  imgSrc={Stellar} alt="" title="Next 
            Watch Some Short Videos On Stellar 
            Through Our Link and Get $50 Free!" 
            para="You will earn up to $50 of 
            Crypto Currency. Stellar is a platform 
            that connects banks, payment systems, 
            and people. Learn how it works and 
            you’ll earn XLM." website="Earn $40 Free XLM" 
             link="https://www.coinbase.com/earn/xlm/invite/k42d9pqf" />
             <br />
             <br />
            <Segment  imgSrc={EOS} alt="" title="Watch 
            Some Short Videos On EOS Through Our Link 
            and Get $50 Free!" 
            para="You will earn up to $50 of 
            Crypto Currency. EOSIO 
            is a protocol designed for fast and free 
            blockchain apps. Learn how it works and you’ll
             earn EOS." 
             link="https://www.coinbase.com/earn/eos/invite/sm70kgv6"
             website="Get $50 Free EOS"
             />
             <br />
             <br />
            <Segment  imgSrc={Comp} alt="" title="Watch 
            Some Short Videos On COMP Through Our Link 
            and Get $59 Free!" 
            para="Compound is a protocol that lets anyone borrow or earn interest on their crypto. Learn how it works and you’ll earn up to $59 in COMP." 
             link="https://changelly.com/?ref_id=weykqy52ocmfsdzq"
             website="Get $59 Free Comp" />
             <br />
             <br />
        </div>
    )
}

export default FeaturedPartners;

