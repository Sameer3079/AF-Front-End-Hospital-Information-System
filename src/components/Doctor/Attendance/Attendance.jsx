import React, { Component }         from 'react';
import axios                        from 'axios';

class Attendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.GetData();
    }

    GetData() {
        axios.get('http://localhost:3001/attendance/user/' + this.props.route.username).then(res => {
            this.setState({ data: res.data });
        });
    }

    DisplayData() {
        let rows = [];
        let key = 0;
        this.state.data.forEach(record => {
            let startDate = new Date(record.DateTimeIn);
            let date = startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate();
            let startTime = this.formatAMPM(new Date(record.DateTimeIn));
            let endTime = this.formatAMPM(new Date(record.DateTimeOut));
            rows.push(<tr key={key}>
                <td>{date}</td>
                <td>{startTime}</td>
                <td>{endTime}</td>
            </tr>);
            key++;
        });
        return rows;
    }

    formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    ShiftStart() {
        let today = new Date();
        // let username = this.props.route.username;
        // let username = this.props.route.username;
        axios.post('http://localhost:3001/attendance/start-shift', {
            username: this.props.route.username,
            dateTimeIn: today.toISOString()
        }).then(res => {
            alert("Shift starting time has been recorded");
        }).catch(err => {
            alert("ShiftStart(): " + err.message + err.error);
        });
    }

    ShiftEnd() {
        let today = new Date();
        axios.put('http://localhost:3001/attendance/end-shift', {
            username: this.props.route.username,
            dateTimeOut: today.toISOString()
        }).then(res => {
            alert("Shift ending time has been recorded");
        }).catch(err => {
            alert("ShiftEnd(): " + err);
        });
    }

    render() {
        this.GetData();

        return (<div align="center">
            <h2>Today's Shift</h2>
            <button type="submit" onClick={this.ShiftStart.bind(this)} className="btn btn-primary" style={{ marginRight: '20px' }}>Start Shift</button>
            <button type="submit" onClick={this.ShiftEnd.bind(this)} className="btn btn-primary">End Shift</button>
            <h2>Attendance (Shift History)</h2>
            <table border="1" style={{ minWidth: '700px' }}>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Start Time</td>
                        <td>End Time</td>
                    </tr>
                </thead>
                <tbody>
                    {this.DisplayData()}
                </tbody>
            </table>
        </div>);
    }
}

export default Attendance;