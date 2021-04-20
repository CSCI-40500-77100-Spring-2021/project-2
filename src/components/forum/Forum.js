import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Body from './Body';
import Header from './Header';
import StartComponent from './StartComponent';

function Forum() {
    return (
        <Router>
            <Header />
            <br />
            <Body />
            <br />
            <Route path="/starting" component={StartComponent} />
        </Router>
    )
}

export default Forum;

