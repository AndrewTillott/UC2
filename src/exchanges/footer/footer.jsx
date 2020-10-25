import React from 'react';
import './footer.css';
import LinkSet from './linkset.jsx';

const Footer = () => {
    return (
        <>
       
            <div className="footer">
                <br />
                <br />
            <h2>All The Links Below Lead to Bonuses</h2>
                <br />
                <br />
                <br />
                <div className="list-series">
                    <div className="first-list">
                        <LinkSet title="Featured" link1="https://www.coinbase.com/join/tillot_ew"  name1="Coinbase" 
                        link2="https://blockfi.com/?ref=4d95f275"  name2="Blockfi" 
                        link3="https://brave.com/mtu788"  name3="Brave" 
                        link4="https://unstoppabledomains.com/r/e35926c0d45f4cc"  name4="Unstoppable Domains" 
                        link5="https://crypto.com/exch/xjgvhg8t7q"  name5="Crypto.com"
                        link6="https://shop.ledger.com/?r=e58329473f39"  name6="Ledger" 
                        link7="https://celsius.onelink.me/Ru6b?pid=affiliates&af_channel=Unlimited%20Crypto_zRQu&af_web_dp=http%3A%2F%2Fcelsius.network%2Fget-app-test" name7="Celsius"  />
                    </div>
                    <div className="first-list">
                        <LinkSet title="Interest" 
                        link1="https://blockfi.com/?ref=4d95f275"  name1="Blockfi" 
                        link2="https://crypto.com/exch/xjgvhg8t7q"  name2="Crypto.com" 
                        link3="https://celsius.onelink.me/Ru6b?pid=affiliates&af_channel=Unlimited%20Crypto_zRQu&af_web_dp=http%3A%2F%2Fcelsius.network%2Fget-app-test"  name3="Celsius" 
                         />
                    </div>
                    <div className="first-list">
                        <LinkSet title="Exchanges" link1="https://www.coinbase.com/join/tillot_ew"  name1="Coinbase" 
                        link2="https://blockfi.com/?ref=4d95f275"  name2="Blockfi" 
                        link3="https://global.bittrex.com/Account/Register?referralCode=OV0-0IJ-3VW"  name3="Bittrex" 
                        link4="https://changelly.com/?ref_id=weykqy52ocmfsdzq"  name4="Changelly" 
                        link5="https://crypto.com/exch/xjgvhg8t7q"  name5="Crypto.com"
                        link6="https://www.liquid.com/sign-up/?affiliate=qpC5h-1A772363"  name6="Liquid" 
                        link7="https://www.binance.com/en/register?ref=PZLLOMXT" name7="Binance"  />
                    </div>
                    <div className="first-list">
                        <LinkSet title="Crypto Domains and More"  
                        link1="www.trading212.com/invite/FMXclOrx" name1="Trading212"
                        link2="" name2=""
                        link3="https://brave.com/mtu788"  name3="Brave" 
                        link4="https://unstoppabledomains.com/r/e35926c0d45f4cc"  name4="Unstoppable Domains" 
                        link5="https://crypto.com/exch/xjgvhg8t7q"  name5="Crypto.com"
                        link6="https://shop.ledger.com/?r=e58329473f39"  name6="Ledger"
                        />
                    </div>
                    <div className="first-list">
                        <LinkSet title="About"  
                        link1="/terms" name1="Terms and Conditions"
                        link2="/privacy" name2="Privacy Policy"
                        />
                    </div>
                </div>
            <hr />
            </div>
            <span className="copyright">
            All rights reserved Unlimited Crypto ©
            </span>
        </>
    )
}

export default Footer;