import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./App.css";
import User from "./User"
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter as Router, Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Home from './Home';
import Navbar from './Navbar';
import { Auth0Provider } from "@auth0/auth0-react";
import AmdDetails from './AmdDetails';
import About from './About';
import Contact from './Contact';
import ViewAmbulance from './ViewAmbulance'
ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-5v0st7xe68nn70td.us.auth0.com"
    clientId="thogG8i1hfKFTrc8JbEUwdVD1HdCbkrd"
    redirectUri={window.location.origin}
  >
  <Router>
  <Navbar/>
    <Switch>
      <Route path="/contact" component={Contact} />
      <Route path ="/sign-up" component={SignUp} />
      <Route path ="/login" component={Login} />
      <Route path="/ambdetails" component={ViewAmbulance}/>
      <Route path="/about" component={About}/>
      <Route path="/addamb" component={AmdDetails} />
      <Route path="/" exact component={Home}/>
      <Route path ="/emergency" exact component={User} />
      <Route path="/:ambulanceid" component= {App} />
    </Switch>
  </Router>
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
