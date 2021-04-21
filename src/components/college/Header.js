import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div  id="wrapper">
            
                <div class="bg-light border-right" id="sidebar-wrapper">
                    <div class="list-group list-group-flush">
                    <Link to="/info"  class="list-group-item list-group-item-action bg-light" >College Info</Link>
                    <Link to="/majors"  class="list-group-item list-group-item-action bg-light" >Majors</Link>
                    <Link to="/events"  class="list-group-item list-group-item-action bg-light" >Events</Link>
                    <Link to="/other"  class="list-group-item list-group-item-action bg-light" >Other</Link>
                    </div>
                </div>

                <h2>*College Name*</h2>



            </div>
  
        )
    }
}

export default Header;