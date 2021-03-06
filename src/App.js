import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route exact path = '/'  component = {Home} />
          <Route path = '/services' component = {Services} />
          <Route path = '/products' component = {Products} />
          <Route path = '/signup' component = {SignUp} />
        </Switch>
        <Footer/>
      </Router>

      
    </div>
  );
}

export default App;
