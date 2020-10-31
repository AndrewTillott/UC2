import React, {Component} from 'react';
import Navbar from '../../components/navbar/NavBar.jsx';
import Intro from '../../earn/intro/intro.jsx';
import Video from '../../earn/video/video.jsx';
import Coinbase from '../../components/coinbase/coinbase.jsx'
import FeaturedPartners from '../../earn/featured/featured.jsx'
import Summary from '../../earn/summary/summary.jsx';
import Footer from '../../earn/footer/footer.jsx';

import { BrowserRouter, Route } from 'react-router-dom';

class Earn extends Component {
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

export default Earn;