import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from './components/NavBar';
import Major from './components/major/Major';
import Forum from './components/forum/Forum';
import Home from './components/home/Home';
import College from './components/college/College';
import Login from './components/login/Login';
import Signup from './components/signup/SignUp';


function App() {
  return (
    <Router>
        <NavBar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/college" exact component={College} />
        <Route path="/major" exact component={Major} />
        <Route path="/forum" component={Forum} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
    </Router>
  );
}

export default App;
