import React, {Component}                           from 'react';
import './Sidebar.css';

import { Link, Router, Route, hashHistory }         from 'react-router';  
import View                                         from './View';

import AddDepartment                                from './AddDepartment';

//import Admin from '../Department/Admin';

class Sidebar extends Component{

    constructor(props){
        super(props);
        this.state=  {
        };
    }    
    render(){
        return( 
            <div>
                <div className="col-md-2">
                        <div className="wrapper">
                        <nav id="sidebar">
                        <ul className="list-unstyled components">
                           <li className=""><a href="#"><i className="fas fa-hospital"></i> Home</a></li>  
                           <li className=""><a href="/#/department/view"><i className="fas fa-hand-point-up"></i> View Department</a></li>  
                           <li className=""><a href="/#/department/add-department"><i className="fas fa-plus-circle"></i> Add Department</a></li>           
                           <li className=""><a href="/#/department/add-admin"><i className="fas fa-plus-circle"></i> Add Department</a></li>           

                        </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-md-10">
                <Router history={hashHistory}>  
                        <Route path="/department/view" component={View}/>
                        <Route path="/department/add-department" component={AddDepartment}/>
                        {/* <Route path="/department/add-admin" component={Admin}/> */}
                    </Router> 
                </div>
             </div>   
                // <Route path="/department/contact" component={Contact}/>

           
            
        );
    }
}

export default Sidebar;