
import { HashRouter } from 'react-router-dom';
// import Projects from './screen/projects/Projects';
import React, { useState, Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/css/Star.css";
import logo from "./logo.svg";
import "./App.css";
import Home from "./screen/home/Home";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./screen/home/reduxForm/store";
import Footer from "./components/Footer/Footer";
// import '@coreui/dist/css/coreui.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from './components/LoginPage';
import { useLocation } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import ForgotPassword from './components/ForgotPassword';
import Howitworks from './components/Howitworks';
import Aboutus from './screen/home/components/Aboutus';
import Benefits from './screen/home/components/Benefits';
import Integrations from './screen/home/components/ Integrations';
import Partners from './screen/home/components/Partners';
import Products from './screen/home/components/Products';
import Scheduling from './screen/home/components/Scheduling';
import Visualediting from './screen/home/components/Visualediting';
import Costalerts from './screen/home/components/Costalerts';
import Partnersignup from './screen/home/components/Partnersignup';
import ConfirmEmail from './components/ConfirmEmail';
import { Program } from './components/Footer/Program';
import { Systemintegrators } from './components/Footer/Systemintegrators';
import { Technology } from './components/Footer/Technology';
import  Residential  from './components/Footer/Residential';
import { Commercial } from './components/Footer/Commercial';
import { Industrial } from './components/Footer/Industrial';
import { Transportation } from './components/Footer/Transportation';
import { Publicsector } from './components/Footer/Publicsector';
import { Union } from './components/Footer/Union';
import { Renovation } from './components/Footer/Renovation';
import  Subcontractors from './components/Footer/Subcontractors';
import { Team } from './components/Footer/Team';
import { Press } from './components/Footer/Press';
import { Careers } from './components/Footer/Careers';
import Changepassword from './components/Changepassword';
import Solution from './components/Footer/Solution';
import("typeface-hk-grotesk");

function App(props) {
  // var url = window.location.href;
  // var filename = url.split("/").pop().split("#")[0].split("?")[0];
  // console.log("path_", filename);

  var jwtTokenSet = getCookie('jwt');
  var ls = localStorage.getItem("user");
  // console.log('localstorage 123', ls);
  console.log(window.location.pathname);
  if (window.location.pathname.includes('/login') || window.location.pathname.includes('/signup') || window.location.pathname.includes('/forgotpassword')) {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/forgotpassword" component={ForgotPassword} />

          </Switch>
        </Router>
      </>
    );
  }
  else {
    return (
      <>
        <div className="Front">
          <Provider store={store}>
            {/* <Router basename="/web/p3d/"> */}
            <Router>
              <Header />
              <Switch>
                {/* <Home /> */}
                <Route exact path="/" component={Home} />
                <Route  path="/howitworks" component={Howitworks} />
                <Route  path="/aboutus" component={Aboutus} />
                <Route  path="/benefits" component={Benefits} />
                <Route  path="/integrations" component={Integrations} />
                <Route  path="/partners" component={Partners} />
                <Route  path="/aboutus" component={Aboutus} />
                <Route  path="/scheduling" component={Scheduling} />
                <Route  path="/products" component={Products} />
                <Route  path="/visualediting" component={Visualediting} />
                <Route  path="/costalerts" component={Costalerts} />
                <Route  path="/partnersignup" component={Partnersignup} />
                <Route  path="/confirmEmail" component={ConfirmEmail} />
                <Route  path="/program" component={Program} />
                <Route  path="/systemintegrators" component={Systemintegrators} />
                <Route  path="/technology" component={Technology} />
                <Route  path="/residential" component={Residential} />
                <Route  path="/commercial" component={Commercial} />
                <Route  path="/industrial" component={Industrial} />
                <Route  path="/transportation" component={Transportation} />
                <Route  path="/publicsector" component={Publicsector} />
                <Route  path="/union" component={Union} />
                <Route  path="/renovation" component={Renovation} />
                <Route  path="/subcontractors" component={Subcontractors} />
                <Route  path="/team" component={Team} />
                <Route  path="/press" component={Press} />
                <Route  path="/careers" component={Careers} />
                <Route  path="/changepassword" component={Changepassword} />
                <Route  path="/Solution" component={Solution} />


                
              </Switch>
              <Footer />
            </Router>
          </Provider>
        </div>
      </>
    );
  }
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  }
  else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  // because unescape has been deprecated, replaced with decodeURI
  //return unescape(dc.substring(begin + prefix.length, end));
  return decodeURI(dc.substring(begin + prefix.length, end));
}

export default App;
