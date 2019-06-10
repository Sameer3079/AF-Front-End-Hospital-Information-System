import React, {Component}                       from 'react';
import './Style.css';
import { Link, Router, Route, hashHistory }     from 'react-router';
import Header                                   from './Header';
import Sidebar                                  from './Sidebar';

class Department extends Component{
    render(){
        return(
                <div>
                <Header/>
                <Sidebar/>
               </div>
        );
    }
}

export default Department;