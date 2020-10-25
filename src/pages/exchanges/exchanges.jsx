import React, {Component} from 'react';
import Navbar from '../../components/navbar/NavBar.jsx';
import InterestPage from '../interest/interest.jsx';
import Home from '../home/index.jsx';
import Coinbase2 from '../../exchanges/coinbase/coinbase.jsx';
import FeaturedPartners from '../../exchanges/featured/featured.jsx';
import Intro from '../../exchanges/intro/intro.jsx';
import Summary from '../../exchanges/summary/summary.jsx';
import Footer from '../../exchanges/footer/footer.jsx';


import { BrowserRouter, Route } from 'react-router-dom';

class Exchanges extends Component{
    state = {};
    render(){
        return(
            <>
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
                
                
               
                <Coinbase2 />
                <FeaturedPartners />
                <Summary />
                <Footer />
            </>
                
            </>
        )
    }
}

export default Exchanges;