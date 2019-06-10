import React, { Component }     from 'react';
import Header                   from './Header';
import Sidebar                  from './Sidebar';


class Employee extends Component{
    constructor(props) {
        super(props);
        console.log(props);
    }
    render(){
        return(
            <div>
              <h1>ADMIN+{this.props.username}</h1>
            </div>


        )
    }
}

export default Employee;
