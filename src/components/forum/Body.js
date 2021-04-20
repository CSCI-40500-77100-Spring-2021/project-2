import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Body extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-fluid">
                <div className="card">
                    <div className="card-body">
                        <h5 onClick={this.handleClick} style={{cursor: 'pointer'}}>
                            <Link to="/starting" className="nav-link">Getting Started</Link></h5>
                        <p className="card-text">Learn the rules to make these Forums a helpful resource.</p>
                    </div>  
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 onClick={this.handleClick} style={{cursor: 'pointer'}}>
                            <Link to="/major" className="nav-link">Majors</Link></h5>
                        <p className="card-text">Get more informations about your major!</p>
                    </div>  
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 onClick={this.handleClick} style={{cursor: 'pointer'}}> 
                            <Link to="/" className="nav-link">Broad Discussion</Link></h5>
                        <p className="card-text">Chat with other learners, read career questions & success stories, and find opportunities for your path.</p>
                    </div>  
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 onClick={this.handleClick} style={{cursor: 'pointer'}}> 
                            <Link to="/" className="nav-link">General Questions from Incoming Student</Link></h5>
                        <p className="card-text">Ask current students, alumni about their experience & what to expect.</p>
                    </div>  
                </div>
                </div>
            </div>
        )
    }

}

export default Body;