import React from 'react';
import "./summary.css";
import ThreeItems from '../summary/threeItems.jsx';
import giraffe from './giragge.svg';
import leg from './leg.svg';
import thumb from './thumb.svg';

const Summary = (props) => {
    return (
        <>
         <br />
         <br />
         <br />
            <h2 className="">
               
                You can use these platforms to borrow too! Simply provide your Crypto as collatoral and get money!
            </h2>
        <br />
        <br />
        <span class="contained">
            <ThreeItems image1={giraffe}
             title="Borrow from Blockfi" 
             para1="With interest rates as low as 4.5%" para2="You don't need to sell your Crypto to get cash!" link="https://blockfi.com/?ref=4d95f275"
             try="Try Blockfi"
             />
            <ThreeItems image1={thumb}
             title="Borrow with Crypto.com" 
             para1="Deposit $10,000 in Crypto and get $5,000 Credit in Stable Coins!" para2="
             All of this with low interest!" 
             link="https://crypto.com/exch/xjgvhg8t7q" 
             try="Try Crpyto.com"
             />
            <ThreeItems image1={leg}
             title="Borrow with Celsius" 
             para1="Did you know that Celsius shares 80% of its revenue with its users!" 
             para2="Withdraw with no fees, and borrowing APR rates as low as 1%"
             link="https://celsius.onelink.me/Ru6b?pid=affiliates&af_channel=Unlimited%20Crypto_zRQu&af_web_dp=http%3A%2F%2Fcelsius.network%2Fget-app-test"
              try="Borrow with the Best Rates At Celsius" />
        </span>
        
        </>
    )
}

export default Summary;