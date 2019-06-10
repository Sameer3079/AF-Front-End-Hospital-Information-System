import React, { Component } from 'react';
import './Sidebar.css';

import { Link, Router, Route, hashHistory } from 'react-router';

import Attendance from './Attendance/Attendance';
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div className="">
                <div className="col-md-2">
                    <div className="wrapper">
                        <nav id="sidebar">
                            <ul className="list-unstyled components">
                                <li className="active"><a href="#">Home</a></li>

                                <li>
                                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">User Profile</a>
                                    <ul className="collapse list-unstyled" id="homeSubmenu">
                                        <li><a href="#">View Profile</a></li>
                                        <li><a href="#">Edit Profile</a></li>
                                    </ul>
                                </li>
                                <li><a href="/#/employee/attendance">Attendance & Shift</a></li>
                            </ul>
                        </nav>
                    </div>
                    
                </div>

                    <div style={{ marginTop: "5%" }} className="col-md-10">
                        <Router history={hashHistory}>
                            <Route path="/employee/attendance" component={Attendance} username={this.props.username} />
                        </Router>
                    </div>
            </div>
        );
    }
}

export default Sidebar;