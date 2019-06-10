import React, {Component}                   from 'react';
import Paper                                from "material-ui/Paper";
import Tooltip                              from 'material-ui/Tooltip';
import {  Router, Route, hashHistory }      from 'react-router';
import axios from 'axios';

import Doctor from '../Layout/doctor';

import imageUrl                             from '../images/logo.jpg';
import TextField from "material-ui/TextField";

import "./LoginStyle.css";

import Admin from '../Layout/admin';

class Login extends Component{

    // Constructor
    constructor(props){
        super(props);

        this.state = {

            username:'',
            password:'',
            userNameError: "",
            passwordError: "",
            URL:"",
            userRole:""
        };


    }

    onChangeUserName = (e) => {
        this.setState({username: e.target.value });

    }

    onChangePassword = (e) => {
        this.setState({ password: e.target.value });

        if((this.state.username).includes("DO")) {
            this.setState({
                    userRole:"DO"
                }
            )
        }

        else if((this.state.username).includes("AD")) {
            this.setState({
                userRole:"AD"
                }
            )
        }

        else if((this.state.username).includes("EM")) {
            this.setState({
                    userRole:"EM"
                }
            )
        }
    }

    CheckUserRole() {
        if(this.state.userRole=="AD") {
            this.GetAdmin();
        }
        else if(this.state.userRole=="DO") {
            this.GetDoctor();
        }
        else if(this.state.userRole=="EM") {
            this.GetEmployee();
        }
    }

    GetAdmin() {
        axios.post('http://localhost:3001/admin/loginAdmin', {
            username:this.state.username,
            password:this.state.password

        }).then(data => {
            if(data.status==200) {
                this.props.route.UpdateUsername(this.state.username);
                window.location.href = "http://localhost:3000/#/admin";
            }
        }).catch(err => {
            console.log(err);
        })
    }

    GetDoctor() {
        axios.post('http://localhost:3001/doctor/loginDoctor', {
            username:this.state.username,
            password:this.state.password

        }).then(data => {
            if(data.status==200) {
                this.props.route.UpdateUsername(this.state.username);
                window.location.href = "http://localhost:3000/#/doctor";
            }
        }).catch(err => {
            console.log(err);
        })
    }

    GetEmployee() {
        axios.post('http://localhost:3001/employee/loginEmployee', {
            username:this.state.username,
            password:this.state.password

        }).then(data => {
            if(data.status==200) {
                this.props.route.UpdateUsername(this.state.username);
                window.location.href = "http://localhost:3000/#/employee";
            }
        }).catch(err => {
            console.log(err);
        })
    }


    Submit = e  =>{
        if(this.state.username === '') {
            alert("User Name is empty");
        }
        if(this.state.password === ''){
            alert("Password is empty");
        }
        else {
            this.CheckUserRole();
        }

        }



    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-xs-6 login-left">
                        <Paper className="paper-left">
                            <h2 className="department">SLHIS Management</h2>
                            <img className="login_page_image" src = {imageUrl}/>
                        </Paper>
                    </div>

                    <div className="col-md-6 col-xs-6 login-right">
                        <Paper className="login-form">

                            <form>
                                <div className="form-group userName">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        id="txt_userName"
                                        className="form-control"
                                        onChange={e => this.onChangeUserName(e)}
                                        value={this.Data1}
                                        name="username"
                                    />
                                </div>

                                <div className="form-group Password" >
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        id="txt_passwords"
                                        className="form-control"
                                        onChange={e => this.onChangePassword(e)}
                                        value={this.Data2}
                                        name="password"
                                    />
                                </div>

                                <Tooltip title="Click to login">




                                    <input
                                        type="button"
                                        className="btn btn-success login-button"
                                        value="Login"
                                        onClick={e => this.Submit(e)}
                                    />

                                </Tooltip>
                            </form>
                        </Paper>

                    </div>
                </div>

                <div>
                </div>

            </div>
        );
    }
}

export default Login;