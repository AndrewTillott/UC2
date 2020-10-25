import React, { Component } from 'react'
import cryptoVideo from 'react'; /////


export default class GreyBox extends Component {
   
    render() {
        return (
            <div className="grey-box">
                <br />
                <iframe className="video" 
                src="https://www.youtube.com/embed/KGSFHyfhg30" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
                <span >
                    <h2>Get Free Crypto Currency</h2>
                    <p>All you have to do is 
                        use our links or unique 
                        codes when you sign 
                        up with our partners. 
                        Our partners 
                        include the biggest 
                        Crypto Currency players like: 
                        Coinbase, crypto.com, brave, and blockfi</p>
                </span>
                <br />
                <br />
            </div>
        )
    }
}
