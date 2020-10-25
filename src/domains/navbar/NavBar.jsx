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
        render(){
        return( 
            <>
                 <nav className="navbar">
        <img className="brand-title" src={logo} />
        <a href="" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul>
            <li><a href="/">Home <span className="rotate">^</span></a></li>
            <li><a href="/interest">Interest</a></li>
            <li><a href="/exchanges">Exchanges</a></li>
            <li><a href="/domains">Domains</a></li>
          
          </ul>
        </div>
      </nav>
            </>
        )

    }
}

export default Navbar;