import React, { Component }         from 'react';
import './Sidebar.css';

import { Link, Router, Route, hashHistory } from 'react-router';


import AdminAttendance from './Attendance/AdminAttendance';
import ViewShifts from './Attendance/ViewShifts';
import AddShift from './Attendance/AddShift';
import UpdateShift from './Attendance/UpdateShift';
import UpdateLeave from './Attendance/UpdateLeave';
import AddLeave from './Attendance/AddLeave';

import addDoctor from './Employee/AddDoctor';
import AddEmployee from './Employee/AddEmployee';
import ViewEmployee from './Employee/ViewEmployee';
import ViewDoctor from './Employee/ViewDoctor';

import AddAdmins from './AddAdmins';

import View                                         from '../Department/View';
import AddDepartment                                from '../Department/AddDepartment';

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
									<li className=""><a href="#"><i className="fas fa-hospital"></i> Home</a></li>  
									<li className=""><a href="/#/admin/department/view"><i className="fas fa-hand-point-up"></i> View Department</a></li>
									<li className=""><a href="/#/admin/department/add-department"><i className="fas fa-plus-circle"></i> Add Department</a></li>

                                <li>
                                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Shifts</a>
                                    <ul className="collapse list-unstyled" id="homeSubmenu">
                                        <li><a href="/#/admin/shifts/view">View Shifts</a></li>
                                        <li><a href="/#/admin/shifts/add">Add Shift</a></li>
                                        <li><a href="#/admin/shifts/update">Update Shift</a></li>
                                    </ul>
                                </li>
                                <li><a href="/#/admin/attendance">Attendance</a></li>
								<li>
                                    <a href="#homeSubmenu2" data-toggle="collapse" aria-expanded="false">Leaves</a>
                                    <ul className="collapse list-unstyled" id="homeSubmenu2">
                                        <li><a href="/#/admin/leaves/add">Add Leave for Role</a></li>
                                        <li><a href="/#/admin/leaves/update">View & Update Leaves for Role</a></li>

                                    </ul>
                                </li>
                                    <li><a href="#/admin/employee/viewEmployee">View Employees</a></li>
                                    <li><a href="#/admin/employee/viewDoctor">View Doctors</a></li>
                                    <li><a href="#/admin/employee/addEmployee">Add Employee</a></li>
                                    <li><a href="#/admin/employee/addDoctor">Add Doctor</a></li>
                                    <li><a href="#/admin/addAdmin">Add Admin</a></li>
									
									
                            </ul>
							
                        </nav>
                    </div>
                </div>
                <div style={{ marginTop: "5%" }} className="col-md-10">
                    <Router history={hashHistory}>
                        {/* Sameer */}
                        <Route path="/admin/attendance" component={AdminAttendance} username={this.props.username} />
                        <Route path="/admin/shifts/view" component={ViewShifts} />
                        <Route path="/admin/shifts/add" component={AddShift} />
                        <Route path="/admin/shifts/update" component={UpdateShift} />
                        <Route path="/admin/leaves/update" component={UpdateLeave} />
                        <Route path="/admin/leaves/add" component={AddLeave} />

                        <Route path="/admin/employee/addEmployee" component={AddEmployee} />
                        <Route path="/admin/employee/viewEmployee" component={ViewEmployee} />
                        <Route path="/admin/employee/addDoctor" component={addDoctor} />
                        <Route path="/admin/employee/viewDoctor" component={ViewDoctor} />
                        <Route path="/admin/addAdmin" component={AddAdmins} />

                        <Route path="/admin/department/view" component={View}/>
                        <Route path="/admin/department/add-department" component={AddDepartment}/>
                    </Router>
                </div>
            </div>

        );
    }
}

export default Sidebar;