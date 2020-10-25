import React, { Component } from 'react'
import cryptoVideo from 'react'; /////


export default class GreyBox extends Component {
   
    render() {
        return (
            <div className="grey-box">
                <br />
                <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/JYd1khX3loA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <span >
                    <h2>Get Free Crypto Currency</h2>
                    <p>All you have to do is 
                        use our links or unique 
                        codes when you sign 
                        up with our partners. 
                        Our partners 
                        include the biggest 
                        crypto-currency players like: <a href="https://www.coinbase.com/join/tillot_ew" target="_blank">Coinbase,</a> <a href="" target="_blank">crypto.com,</a> <a href="https://brave.com/?ref=mtu788" target="_blank">brave,</a> and <a href="https://blockfi.com/?ref=4d95f275" target="_blank">blockfi!</a></p>
                </span>
                <br />
                <br />
            </div>
        )
    }
}
