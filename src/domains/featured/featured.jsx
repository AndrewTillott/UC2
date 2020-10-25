import React from 'react'
import Segment from './segment.jsx'
import Blockfi from './blockfi.png'
import Crypto from './crypto.com.png'
import Brave from './brave.png';
import unstoppableDomains from './unstoppable domains.png'

function featured(props) {
    return (
        <div>
            <br />
            <h1>Featured Websites -</h1>
            <p>The first link is to the Unstoppable Domains Website, and the others allow you to purchase the top Domains that we have already purchased!
            </p>
            <Segment  imgSrc={unstoppableDomains} alt="" title="Get $10 free with Unstoppable Domains" 
            para="Sign up using the link below, and you will get $10 off your first Unstoppable Domains purchase!" website="Get
             Started on Unstoppable Domains" 
             link="https://unstoppabledomains.com/r/e35926c0d45f4cc" />
             <br />
             <br />
            <Segment  imgSrc={unstoppableDomains} alt="" title="Get $10 free with Unstoppable Domains" 
            para="Sign up using the link below, and you will get $10 off your first Unstoppable Domains purchase!" website="Get
            Started on Unstoppable Domains" website="Get
             Started with Unstoppable Domains" 
             link="https://unstoppabledomains.com/r/e35926c0d45f4cc" />
             <br />
             <br />
            <Segment  imgSrc={unstoppableDomains} alt="" title="Get Crypto 
            free for surfing the internet" 
            para="Sign up using the link below, and you will get $10 off your first Unstoppable Domains purchase!" website="Get
            Started on Unstoppable Domains" website="Get
             Started with Unstoppable Domains" 
             link="https://unstoppabledomains.com/r/e35926c0d45f4cc" />

      
        </div>
    )
}

export default featured

