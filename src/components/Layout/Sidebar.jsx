import React, {Component} from 'react';
import './Sidebar.css';

import { Link, Router, Route, hashHistory } from 'react-router';  

//import Login from '../Login/Login';
class Sidebar extends Component{

    constructor(props){
        super(props);
        this.state=  {
            
            userButtons:[]
        };
    }    

    render(){
        return(
          
                <div className="row">
                        <div className="wrapper">
                        <nav id="sidebar">
                        <ul className="list-unstyled components">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="/view">View Departments</a></li>
                            <li><a href="#">Department Setting</a></li>
                            <li><a href="#">Log out</a></li>
                        </ul>
                        </nav>
                    </div>
                </div>
                
           
             
        );
    }
}

export default Sidebar;