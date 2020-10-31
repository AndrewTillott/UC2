import React, {Component} from "react";
import "./Navbar.css"
import logo from "./Number 8.svg"
 /* Need to add Link so that you can navigate pages and you need to fix the state management issue here. */

class Navbar extends Component {
        constructor(props){
            super(props);
            this.state = {
            }  
        }
        handleClick(e){
            e.preventDefault();
            const navbarLinks = document.getElementsByClassName('navbar-links')[0];
            
            navbarLinks.classList.toggle('active');

        }
        render(){
        return( 
            <>
              <nav className="navbar">
                <img className="brand-title" src={logo} />
                <a href="" onClick={this.handleClick.bind(this)} className="toggle-button">
                  <span style={{color: "black"}, {backgroundColor: "black"}} className="bar"></span>
                  <span style={{color: "black"}, {backgroundColor: "black"}} className="bar"></span>
                  <span style={{color: "black"}, {backgroundColor: "black"}} className="bar"></span>
                </a>
                <div className="navbar-links">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/interest">Interest</a></li>
                    <li><a href="/exchanges">Exchanges</a></li>
                    <li><a href="/domains">Domains</a></li>
                    <li><a href="/earn">Earn</a></li>
                  </ul>
                </div>
              </nav>
            </>
        )

    }
}

export default Navbar;