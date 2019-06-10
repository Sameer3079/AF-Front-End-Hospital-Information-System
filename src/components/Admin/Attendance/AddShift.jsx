import React, { Component }                 from 'react';
import axios                                from 'axios';

class AddShift extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            startTime: '',
            endTime: '',
            nameError: '',
            startTimeError: '',
            endTimeError: ''
        }
    }

    onSubmit() {
        axios.post('http://localhost:3001/shifts', {
            name: this.state.name,
            startTime: this.state.startTime,
            endTime: this.state.endTime
        }).then(res => {
            alert("Shift Added");
        }).catch(err => {
            alert("Error");
        })
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
            this.setState({startTimeError: "Invalid Date"});
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
            this.setState({endTimeError: "Invalid Date"});
        } else {
            this.setState({ endTime: event.target.value, endTimeError: "" });
        }
    }

    render() {
        return (<div>
            <h2>Add Shift</h2>
            <table style={{marginLeft: '400px'}}>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" name="name" onChange={this.onNameChange.bind(this)} /></td>
                        <td style={{ color: 'red' }}>{this.state.nameError}</td>
                    </tr>
                    <tr>
                        <td>Start Time (24 hr Format)</td>
                        <td><input type="text" name="startTime" onChange={this.onStartTimeChange.bind(this)}
                            placeholder="eg: 08:30:00" /></td>
                        <td style={{ color: 'red' }}>{this.state.startTimeError}</td>
                    </tr>
                    <tr>
                        <td>End Time (24 hr Format)</td>
                        <td><input type="text" name="endTime" onChange={this.onEndTimeChange.bind(this)}
                            placeholder="eg: 17:30:00" /></td>
                        <td style={{ color: 'red' }}>{this.state.endTimeError}</td>
                    </tr>
                </tbody>
            </table><br />
            <button className="btn btn-primary" onClick={this.onSubmit.bind(this)}>Add Shift</button>
        </div>);
    }
}

export default AddShift;