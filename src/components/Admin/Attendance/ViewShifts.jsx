import React, { Component }         from 'react';
import axios                        from 'axios';

class ViewShifts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
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
            </tr>);
            key++;
        })
        return rows;
    }

    render() {
        return (<div align="center">
            <h2>Shifts</h2>
            <table border="1" style={{minWidth: '700px'}}>
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
        </div>);
    }
}

export default ViewShifts;