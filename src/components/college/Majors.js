import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";


class Majors extends Component {
    render() {
        return (
            <div>
                <h3>Majors page</h3>


                <div class="row">
                    <div class="col-sm-4">
                        <div class="card">
                        <div class="card-body">
                            <Link to="/major" ><h5 class="card-title">Major 1</h5></Link>
                                <h6 class="card-subtitle mb-2 text-muted">subtitle</h6>
                                <p class="card-text">iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card">
                        <div class="card-body">
                            <Link to="/major" ><h5 class="card-title">Major 2</h5></Link>
                                <h6 class="card-subtitle mb-2 text-muted">subtitle</h6>
                                <p class="card-text">iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                        <div class="card-body">
                            <Link to="/major" ><h5 class="card-title">Major 3</h5></Link>
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

export default Majors;