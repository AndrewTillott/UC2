import React from 'react';
import "./summary.css";
import ThreeItems from '../summary/threeItems.jsx';
import giraffe from './giragge.png';
import leg from './leg.png';
import thumb from './thumb.png';

const Summary = (props) => {
    return (
        <>
         <br />
         <br />
         <br />
            <h2 className="">
               
                Keep making those 
                crypto gains! We've got you covered!
            </h2>
        <br />
        <br />
        <span class="contained">
            <ThreeItems image1={giraffe}
             title="Free Crypto" 
             para1="Get paid for surfing the internet!" para2="You can turn off ads, or get paid when you view them with the Brave Browser!" link="https://brave.com/?ref=mtu788"
             try="Try the Brave Browser"
             />
            <ThreeItems image1={thumb}
             title="Find the best crypto sites" 
             para1="These sites allow 
             for instant crypto trading, 
             high interest and much more!" para2="
             Did you know that you can get crypto domains!" 
             link="https://unstoppabledomains.com/r/e35926c0d45f4cc" 
             try="Try Unstoppable Domains"
             />
            <ThreeItems image1={leg}
             title="Trusted Sites and products" 
             para1="These are websites that we use." 
             para2="So you know that you can trust them!"
             link="https://shop.ledger.com/?r=e58329473f39"
              try="Keep your
              crypto safe with Ledger" />
        </span>
        
        </>
    )
}

export default Summary;