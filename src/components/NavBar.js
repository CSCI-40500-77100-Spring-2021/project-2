import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <Link to="/" className="navbar-brand">cUNITY</Link>
                        <div className="collpase navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="navbar-item">
                            <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/forum" className="nav-link">Forum</Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/sign-up" className="nav-link">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>          
            </nav>
        )
    }
}

export default NavBar;

