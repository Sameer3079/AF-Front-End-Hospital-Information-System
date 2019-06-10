import React, { Component }             from 'react';
import axios                            from 'axios';

class AdminAttendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchUsername: '',
            betweenData: [],
            absentData: []
        }
        this.GetAttendanceToday();
        this.GetAbsentEmployeesToday();
    }

    GetData() {
        axios.get('http://localhost:3001/attendance/user/' + this.props.route.username).then(res => {
            this.setState({ data: res.data });
        });
    }

    FormatDateToSearch(date, dayOffset) {
        date.setHours(5);
        date.setMinutes(30);
        date.setSeconds(0);
        date.setMilliseconds(0);
        date.setDate(date.getDate() + dayOffset);
        return date.toISOString();
    }

    GetAttendanceToday() {
        axios.post('http://localhost:3001/attendance/between', {
            startDateTime: this.FormatDateToSearch(new Date(), -1),
            endDateTime: this.FormatDateToSearch(new Date(), +1)
        }).then(res => {
            this.setState({ betweenData: res.data.data });
        }).catch(err => {
            alert("GetAttendanceToday() Error");
        });
    }

    DisplayAttendanceToday() {
        let rows = [];
        this.state.betweenData.map(record => {
            rows.push(<tr>
                <td>{record.eId}</td>
                <td>{this.formatAMPM(new Date(record.DateTimeIn), "")}</td>
                <td>{this.formatAMPM(new Date(record.DateTimeOut), "Still Working")}</td>
            </tr>);
        })
        return rows;
    }

    GetAbsentEmployeesToday() {
        axios.post('http://localhost:3001/attendance/between-absent', {
            startDateTime: this.FormatDateToSearch(new Date(), -1),
            endDateTime: this.FormatDateToSearch(new Date(), +1)
        }).then(res => {
            this.setState({ absentData: res.data.data });
        }).catch(err => {
            alert("GetAbsentEmployeesToday");
        });
    }

    DisplayAbsentEmployeesToday() {
        let rows = [];
        this.state.absentData.map(record => {
            rows.push(<tr>
                <td>{record}</td>
                <td>Shift hasn't started yet</td>
                <td>N/A</td>
            </tr>);
        })
        return rows;
    }

    // GetUsername(id) {
    //     let value = [];
    //     axios.get('http://localhost:3001/employees/' + id).then(res => {
    //         value.push(res.data.username);
    //         alert(res.data.username);
    //     }).catch(err => {
    //         value = "qwe";
    //     });
    //     return value.length;
    // }

    formatAMPM(date, text) {
        // Checking whether the date is valid
        if (Object.prototype.toString.call(date) === "[object Date]") {
            // it is a date
            if (isNaN(date.getTime())) {  // d.valueOf() could also work
                // date is not valid
                return text;
            } else {
                // date is valid
            }
        } else {
            // not a date
            return text;
        }
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    render() {
        return (<div align="center">
            <h2>Attendance</h2>
            <table border="1" style={{minWidth: '700px'}}>
                <thead>
                    <tr>
                        <td>Employee Id</td>
                        <td>Date Time In</td>
                        <td>Date Time Out</td>
                    </tr>
                </thead>
                <tbody>
                    {this.DisplayAbsentEmployeesToday()}
                    {this.DisplayAttendanceToday()}
                </tbody>
            </table>
        </div>);
    }
}

export default AdminAttendance;