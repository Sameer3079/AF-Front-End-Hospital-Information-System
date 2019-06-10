import React, { Component } from 'react';
import Axios from 'axios';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminUsername: '',
      adminPassword: '',
      adminFirstname: '',
      adminLastname: '',
      adminEmail: '',

      adminUsernameError: '',
      adminPasswordError: '',
      adminFirstnameError: '',
      adminLastnameError: '',
      adminEmailError: ''
    };
  }

  // onChange methods.
  changeUsername = e => {
    console.log(e.target.value);
    this.setState({
      adminUsername: e.target.value
    });
  };

  changePassword = e => {
    console.log(e.target.value);
    this.setState({
      adminPassword: e.target.value
    });
  };

  changeAdminfirstname = e => {
    console.log(e.target.value);
    this.setState({
      adminFirstname: e.target.value
    });
  };

  changeAdminlastname = e => {
    console.log(e.target.value);
    this.setState({
      adminLastname: e.target.value
    });
  };

  changeAdminEmail = e => {
    console.log(e.target.value);
    this.setState({
      adminEmail: e.target.value
    });
  };

  onSubmit = () => {
    if (this.state.adminUsername == '') {
      this.setState({
        adminUsernameError: 'Admin Name is Empty'
      });
    }

    if (this.state.adminPassword == '') {
      this.setState({
        adminPasswordError: 'Password is Empty'
      });
    }

    if (this.state.adminFirstname == '') {
      this.setState({
        adminFirstnameError: 'First Name is Empty'
      });
    }

    if (this.state.adminLastname == '') {
      this.setState({
        adminLastnameError: 'Last Name is Empty'
      });
    }

    if (this.state.adminEmailError == '') {
      this.setState({
        adminEmailError: 'Email is Empty'
      });
    } else {
      Axios.post('http://localhost:3001/admin', {
        username: this.state.adminUsername,
        password: this.state.adminPassword,
        firstName: this.state.adminFirstname,
        lastName: this.state.adminLastname,
        email: this.state.adminEmail
      })
        .then(result => {
          //if(result === 200){
          alert('Admin Added');
          //}
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div style={{ marginTop: '60px' }} className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Panel title</h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label>Username</label>
                <input
                  value={this.state.adminUsername}
                  onChange={event => this.changeUsername(event)}
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Admin Name"
                />

                {this.state.adminUsernameError ? (
                  <small
                    style={{ color: 'red' }}
                    className="animated zoomIn form-text text-muted"
                  >
                    {this.state.adminUsernameError}
                  </small>
                ) : (
                  ''
                )}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  value={this.state.adminPassword}
                  onChange={event => this.changePassword(event)}
                  type="password"
                  className="form-control"
                  placeholder="Enter Admin Password"
                />

                {this.state.adminPasswordError ? (
                  <small
                    style={{ color: 'red' }}
                    className="animated zoomIn form-text text-muted"
                  >
                    {this.state.adminPasswordError}
                  </small>
                ) : (
                  ''
                )}
              </div>

              <div className="form-group">
                <label>First Name</label>
                <input
                  value={this.state.adminFirstname}
                  onChange={event => this.changeAdminfirstname(event)}
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                />

                {this.state.adminFirstnameError ? (
                  <small
                    style={{ color: 'red' }}
                    className="animated zoomIn form-text text-muted"
                  >
                    {this.state.adminFirstnameError}
                  </small>
                ) : (
                  ''
                )}
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  value={this.state.adminLastname}
                  onChange={event => this.changeAdminlastname(event)}
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                />

                {this.state.adminLastnameError ? (
                  <small
                    style={{ color: 'red' }}
                    className="animated zoomIn form-text text-muted"
                  >
                    {this.state.adminLastnameError}
                  </small>
                ) : (
                  ''
                )}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  value={this.state.adminEmail}
                  onChange={event => this.changeAdminEmail(event)}
                  type="text"
                  className="form-control"
                  placeholder="Enter Email"
                />
                {this.state.adminEmailError ? (
                  <small
                    style={{ color: 'red' }}
                    className="animated zoomIn form-text text-muted"
                  >
                    {this.state.adminEmailError}
                  </small>
                ) : (
                  ''
                )}
              </div>

              <button
                type="button"
                onClick={this.onSubmit}
                className="btn btn-primary"
              >
                <i class="far fa-save fa-lg" /> Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
