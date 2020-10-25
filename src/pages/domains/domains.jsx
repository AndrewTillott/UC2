import React, {Component} from 'react';
import Navbar from '../../domains/navbar/NavBar.jsx';
import Intro from '../../domains/intro/intro.jsx';
import Video from '../../domains/video/video.jsx'
import Coinbase from '../../domains/coinbase/coinbase.jsx'
import FeaturedPartners from '../../domains/featured/featured.jsx'
import Summary from '../../domains/summary/summary.jsx';
import Footer from '../../domains/footer/footer.jsx';
import InterestPage from '../interest/interest.jsx';
import Exchanges from '../exchanges/exchanges.jsx';


import { BrowserRouter, Route } from 'react-router-dom';

class Domains extends Component {
    state = {};
    render(){
        return(
            <>
                
                <Intro />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Video />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Coinbase />
                <FeaturedPartners />
                <Summary />
                <Footer />
            </>
        )
    }
}

export default Domains;