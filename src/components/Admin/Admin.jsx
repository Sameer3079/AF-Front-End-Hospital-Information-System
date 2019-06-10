import React, { Component }         from 'react';
import Header                       from './Header';
import Sidebar                      from './Sidebar';


class Employee extends Component{
    constructor(props) {
        super(props);
        console.log(props);
    }
    render(){
        return(
            <div>
                <Header/>
                <Sidebar username={this.props.username}/>
                {/* <div className="content col-md-10" style={{backgroundColor:"red"}}>
                    <h1>Content</h1>
                </div> */}
            </div>
           

        )
    }
}

export default Employee;