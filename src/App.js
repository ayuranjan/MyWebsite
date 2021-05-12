
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Footer from '../src/components/Footer';
import Blog from './components/pages/Blog';
import Project from '../src/components/Resuable/Project'
import Me from './components/Me';
import ContactUs from './components/pages/ContactUs';
import HackerRank from './components/Links/HackerRank'
import GeekForGeeks from './components/Links/GeekForGeeks'
import LeetCode from './components/Links/LeetCode'
import Facebook from './components/Links/Facebook'
import Instagram from './components/Links/Instagram'
import Twitter from './components/Links/Twitter'
import LinkedIn from './components/Links/LinkedIn'
import attendance from './components/Links/AttendanceSystem'
import banking from './components/Links/Banking'
import covid from './components/Links/CovidDetection'
import site from './components/Links/Website';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/MyWebsite/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/blogs' component={Blog} />
          <Route path='/contact-me' component={ContactUs} />
          <Route path='/sign-up' component={ContactUs} />
          <Route path='/about-me' component={Me} />
          <Route path='/hackerank' component={HackerRank} />
          <Route path='/geek' component={GeekForGeeks} />
          <Route path='/leet' component={LeetCode} />
          <Route path='/facebook' component={Facebook} />
          <Route path='/insta' component={Instagram} />
          <Route path='/twitter' component={Twitter} />
          <Route path='/linkedIn' component={LinkedIn} />
          <Route path='/cnn-project' component={Project} />
          <Route path='/opencv' component={attendance} />
          <Route path='/site' component={site} />
          <Route path='/banking' component={banking} />
          <Route path='/corona' component={covid} />


        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
