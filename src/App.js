import React from 'react';
import './App.css';
import Home from "./pages/home/index";
import InterestPage from './pages/interest/interest.jsx';
import Exchanges from './pages/exchanges/exchanges.jsx';
import NavBar from './components/navbar/NavBar.jsx';
import Domains from './pages/domains/domains.jsx';
import Privacy from './pages/legal/privacy.jsx';
import Terms from './pages/legal/terms.jsx';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="">
      <BrowserRouter>
                    <div>
                            <NavBar />
                            <Route exact path='/' component={Home} />
                            <Route path='/interest' component={InterestPage} />
                            <Route path='/exchanges' component={Exchanges} />
                            <Route path='/domains' component={Domains} />
                            <Route path='/privacy' component={Privacy} />
                            <Route path='/terms' component={Terms} />
                    </div>
       </BrowserRouter>
       
      </header>
    </div>
  );
}

export default App;
