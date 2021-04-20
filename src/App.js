import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from './components/NavBar';
import Forum from './components/forum/Forum';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/SignUp';

import StartComponent from './components/forum/StartComponent';

function App() {
  return (
    <Router>
        <NavBar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/forum" component={Forum} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
    </Router>
  );
}

export default App;
