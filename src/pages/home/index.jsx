import React, {Component} from 'react';
import Navbar from '../../components/navbar/NavBar.jsx';
import Intro from '../../components/intro/intro.jsx';
import Video from '../../components/video/video.jsx'
import Coinbase from '../../components/coinbase/coinbase.jsx'
import FeaturedPartners from '../../components/featured/featured.jsx'
import Summary from '../../components/summary/summary.jsx';
import Footer from '../../components/footer/footer.jsx';
import InterestPage from '../interest/interest.jsx';
import Exchanges from '../exchanges/exchanges.jsx';


import { BrowserRouter, Route } from 'react-router-dom';

class Home extends Component {
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

export default Home;