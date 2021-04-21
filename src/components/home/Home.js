import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";


class Home extends Component {
    render() {
        return (

            <div>
                <h3>Home Page!</h3>
                <p>*info on cUNITY*</p>
                <hr></hr>
                <h3>Pick the College you are interested in</h3>
                <p>*Colleges will prob be displayed here*</p>

                <div class="row">
                    <div class="col-sm-3">
                        <div class="card">
                        <div class="card-body">
                            <Link to="/college" ><h5 class="card-title">College 1</h5></Link>
                                <h6 class="card-subtitle mb-2 text-muted">subtitle</h6>
                                <p class="card-text">iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="card">
                        <div class="card-body">
                            <Link to="/college" ><h5 class="card-title">College 2</h5></Link>
                                <h6 class="card-subtitle mb-2 text-muted">subtitle</h6>
                                <p class="card-text">iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                        <div class="card-body">
                            <Link to="/college" ><h5 class="card-title">College 3</h5></Link>
                                <h6 class="card-subtitle mb-2 text-muted">subtitle</h6>
                                <p class="card-text">iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                            </div>
                        </div>
                    </div>
                    </div>

            </div>
        )
    }
}



export default Home;