import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link} from "react-router-dom";


class Major extends Component {
    render() {
        return (

            <div>
                <h3>Major Page!</h3>
                <p>*includes the classes offered for the major*</p>
                <hr></hr>
                <p>*classes will prob be displayed here*</p>

                <div class="row">
                    <div class="col-sm-3">
                        <div class="card">
                        <div class="card-body">
                            <Link to="/class" ><h5 class="card-title">Class 1</h5></Link>
                                <h6 class="card-subtitle mb-2 text-muted">subtitle</h6>
                                <p class="card-text">iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="card">
                        <div class="card-body">
                            <Link to="/class" ><h5 class="card-title">Class 2</h5></Link>
                                <h6 class="card-subtitle mb-2 text-muted">subtitle</h6>
                                <p class="card-text">iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                        <div class="card-body">
                            <Link to="/class" ><h5 class="card-title">Class 3</h5></Link>
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


export default Major;