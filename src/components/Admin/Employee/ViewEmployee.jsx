import React, {Component} from 'react';
import axios from 'axios';

class ViewEmployee extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
        this.GetData();
    }

    GetData(){
        axios.get('http://localhost:3001/employee').then(res=>{
            this.setState({data:res.data});
        });
    }

    // fetchArray(array){
    //     for (let index = 0; index < array.length; index++) {
    //         const element = array[index];
    //         return element;   
    //     }
    // }
    DisplayData(){
        let rows = [];
        this.state.data.forEach(record=>{
            let username = record.username;
            let FirstName = record.firstName;
            let LastName = record.lastName;
            let DOB = record.dob;
            let gender = record.gender;
            let civilStatus = record.civilStatus;
            let NIC = record.NIC;
            let address = record.address;
            let phone = record.phone;
            let email = record.email;
            let deleted = record.deleted;
            let eType = record.eType;
            let departments = record.departments;
        
            rows.push(<tr>
                <td>{username}</td>
                <td>{FirstName}</td>
                <td>{LastName}</td>
                <td>{DOB}</td>
                <td>{gender}</td>
                <td>{civilStatus}</td>
                <td>{NIC}</td>
                <td>{address}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>{eType}</td>
                <td>{departments}</td>
                </tr> );
        });
        
        return rows;
        
    }
    render(){
        return(
            <div style={{marginTop:"10px", marginTop:"60px"}}>
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Employee Details</h3>
                    
                </div>
                <div className="panel-body">
                    
                <table className="table table-bordered">
        
                        <thead>
                            <tr>
                            <th scope="col">Usename </th>
                                <th scope="col">FirstName </th>
                                <th scope="col">LastName</th>
                                <th scope="col">DOB</th>
                                <th scope="col">gender</th>
                                <th scope="col">civilStatus</th>
                                <th scope="col">NIC</th>
                                <th scope="col">address</th>
                                <th scope="col">phone</th>
                                <th scope="col">email</th>
                                <th scope="col">EType</th>
                                <th scope="col">departments</th>
                            </tr>
                        </thead>
                        <tbody>                                
                               {
                                    this.DisplayData()
                               }
                        </tbody>
                    </table>
                </div>
            </div>

            <hr/>
            
        </div>


          
        );
    }
    // render(){
    //     this.GetData();

    //     return (<div align="center">
    //      <table border="1" style={{ minWidth: '700px' }}>
    //         <thead>
    //             <td>username</td>
    //             <td>FirstName</td>
    //             <td>LastName</td>
    //             <td>DOB</td>
    //             <td>gender</td>
    //             <td>civilStatus</td>
    //             <td>NIC</td>
    //             <td>address</td>
    //             <td>phone</td>
    //             <td>email</td>
    //             <td>deleted</td>
    //             <td>eType</td>
    //             <td>departments</td>
    //         </thead>
    //         <tbody>
    //             {this.DisplayData()}
    //         </tbody>
    //         </table>
    //     </div>


    //     )
    // }
}

export default ViewEmployee;