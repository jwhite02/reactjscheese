import React, { Component } from 'react';
//import logo from './logo.svg';
import '../src/styles/css/App.css';
//import HeaderSection from '../src/components/header/HeaderSection';
//import CardSection from '../src/components/content/CardSection';
//import FooterSection from '../src/components/footer/FooterSection';
import {BrowserRouter as Router} from 'react-router-dom';

//import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import SiteHolder from './components/content/SiteHolder';
import SiteBugerMenu from './components/SiteBugerMenu';
//import ASideBar from './components/content/ASideBar';




class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <SiteBugerMenu />
        </Router>
      </div>
     /* <div>  <HeaderSection /> <CardSection /> <FooterSection />
        <HeaderSection />
        <CardSection />
        <FooterSection />
      </div> */
    );
  }
}

export default App;
