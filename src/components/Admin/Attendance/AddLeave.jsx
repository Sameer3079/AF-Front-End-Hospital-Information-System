import React, { Component }                 from 'react';
import axios                                from 'axios';

class AddShift extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: '',
            shifts: '',
        }
    }

    onRoleChanged(event) {
        this.setState({role: event.target.value});
    }

    onShiftsChanged(event) {
        this.setState({shifts: event.target.value});
    }

    onSubmit() {
        axios.put('http://localhost:3001/leaves', {
            role: this.state.role,
            shifts: this.state.shifts
        }).then(res => {
            alert("Amount of Leaves for Role Added");
        }).catch(err => {
            alert("Error");
        })
    }

    render() {
        return (<div align="center">
            <h2>Add Leave Amounts for role (Shifts)</h2>
            <div style={{ marginRight: '100px', marginTop: '100px'}}>
                <table>
                    <tbody>
                        <tr>
                            <td>Role</td>
                            <td><input type="text" name="role" onChange={this.onRoleChanged.bind(this)} 
                            value={this.state.role} placeholder="eg: Doctor"/></td>
                        </tr>
                        <tr>
                            <td>Shifts (Leave)</td>
                            <td><input type="Number" name="shifts" onChange={this.onShiftsChanged.bind(this)}
                                placeholder="eg: 5" value={this.state.shifts} /></td>
                        </tr>
                    </tbody>
                </table><br />
                <button className="btn btn-primary" onClick={this.onSubmit.bind(this)}>Add Leave</button>
            </div>
        </div>);
    }
}

export default AddShift;