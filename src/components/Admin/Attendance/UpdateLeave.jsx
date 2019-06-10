import React, { Component }             from 'react';
import axios                            from 'axios';

class UpdateLeave extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            role: '',
            shifts: '',
            nameError: '',
            startTimeError: '',
            endTimeError: '',
            selectedName: '',
            selectedStartTime: '',
            selectedEndTime: ''
        }
    }

    GetDate() {
        axios.get('http://localhost:3001/leaves').then(res => {
            this.setState({ data: res.data });
        }).catch(err => {
            alert(err);
        });
    }

    DisplayLeaves() {
        let rows = [];
        let key = 0;
        this.state.data.forEach(leave => {
            rows.push(<tr key={key}>
                <td>{leave.role}</td>
                <td>{leave.shifts}</td>
                <td><button onClick={event => this.onSelectClick(leave, event)}>Select</button></td>
            </tr>);
            key++;
        })
        return rows;
    }

    onSelectClick(leave) {
        this.setState({role: leave.role, shifts: leave.shifts});
    }

    onNameChange(event) {
        this.setState({ name: event.target.value });
    }

    onStartTimeChange(event) {
        let time = event.target.value.split(":");
        let hour = time[0];
        let minute = time[1];
        let second = time[2];
        if (hour < 0 || hour > 24 || minute < 0 || minute > 60 || second < 0 || second > 60) {
            this.setState({ startTimeError: "Invalid Date" });
        } else {
            this.setState({ startTime: event.target.value, startTimeError: "" });
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
            alert("Amount of Leaves for Role Updated");
        }).catch(err => {
            alert("Error");
        })
    }

    render() {
        this.GetDate();
        return (<div>
            <h2>View & Update Leave (Shifts)</h2>
            <table border="1" style={{ minWidth: '500px', float: 'left', marginLeft: '100px' }}>
                <thead>
                    <tr>
                        <th>Role</th>
                        <th>Leave Amount (Shifts)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.DisplayLeaves()}
                </tbody>
            </table>
            <div style={{ float: 'right', marginRight: '100px'}}>
                <table style={{}}>
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
                <button className="btn btn-primary" onClick={this.onSubmit.bind(this)}>Update Leave</button>
            </div>
        </div>);
    }
}

export default UpdateLeave;