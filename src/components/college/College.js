import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from './Header';
import Info from './Info';
import Majors from './Majors';

function College() {
    return (
        <Router>
            <Header />
            <Route path="/info" component={Info}/> 
            <Route path="/majors" component={Majors} />
        </Router>
    )
}

export default College;