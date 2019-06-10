import React, { Component }         from 'react';
import axios                        from 'axios';

class UpdateShift extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: '',
            startTime: '',
            endTime: '',
            nameError: '',
            startTimeError: '',
            endTimeError: '',
            selectedName: '',
            selectedStartTime: '',
            selectedEndTime: ''
        }
        this.GetDate();
    }

    GetDate() {
        axios.get('http://localhost:3001/shifts').then(res => {
            this.setState({ data: res.data });
        }).catch(err => {
            alert(err);
        });
    }

    DisplayShifts() {
        let rows = [];
        let key = 0;
        this.state.data.forEach(shift => {
            rows.push(<tr key={key}>
                <td>{shift.name}</td>
                <td>{shift.startTime}</td>
                <td>{shift.endTime}</td>
                <td><button onClick={event => this.onSelectClick(shift, event)}>Select</button></td>
            </tr>);
            key++;
        })
        return rows;
    }

    onSelectClick(shift) {
        this.setState({name: shift.name, startTime: shift.startTime, endTime: shift.endTime});
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

    onEndTimeChange(event) {
        let time = event.target.value.split(":");
        let hour = time[0];
        let minute = time[1];
        let second = time[2];
        if (hour < 0 || hour > 24 || minute < 0 || minute > 60 || second < 0 || second > 60) {
            this.setState({ endTimeError: "Invalid Date" });
        } else {
            this.setState({ endTime: event.target.value, endTimeError: "" });
        }
    }

    onSubmit() {
        axios.put('http://localhost:3001/shifts', {
            name: this.state.name,
            startTime: this.state.startTime,
            endTime: this.state.endTime
        }).then(res => {
            alert("Shift Updated");
        }).catch(err => {
            alert("Error");
        })
    }

    render() {
        return (<div>
            <h2>Update Shift</h2>
            <table border="1" style={{ minWidth: '500px', float: 'left', marginLeft: '100px' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                </thead>
                <tbody>
                    {this.DisplayShifts()}
                </tbody>
            </table>
            <div style={{ float: 'right', marginRight: '100px'}}>
                <table style={{}}>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" name="name" onChange={this.onNameChange.bind(this)} 
                            value={this.state.name} disabled/></td>
                            <td style={{ color: 'red' }}>{this.state.nameError}</td>
                        </tr>
                        <tr>
                            <td>Start Time (24 hr Format)</td>
                            <td><input type="text" name="startTime" onChange={this.onStartTimeChange.bind(this)}
                                placeholder="eg: 08:30:00" value={this.state.startTime} /></td>
                            <td style={{ color: 'red' }}>{this.state.startTimeError}</td>
                        </tr>
                        <tr>
                            <td>End Time (24 hr Format)</td>
                            <td><input type="text" name="endTime" onChange={this.onEndTimeChange.bind(this)}
                                placeholder="eg: 17:30:00" value={this.state.endTime} /></td>
                            <td style={{ color: 'red' }}>{this.state.endTimeError}</td>
                        </tr>
                    </tbody>
                </table><br />
                <button className="btn btn-primary" onClick={this.onSubmit.bind(this)}>Update Shift</button>
            </div>
        </div>);
    }
}

export default UpdateShift;