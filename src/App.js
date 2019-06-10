import React, { Component }                         from 'react';
import { Link, Router, Route, hashHistory }         from 'react-router';
import Login                                        from './components/Logins/Login';

import './App.css';

import Department                                   from './components/Department/Departments';
import Admin                                        from './components/Admin/Admin';
import Doctor                                       from './components/Doctor/Doctor';
import Employee                                     from './components/Employee/Employee';



// import Header from './components/Layout/Header';
// import Sidebar  from './components/Layout/Sidebar';


// import MainContainer from './components/MainContainer'

class App extends Component {

  constructor(props){
    super(props);

    this.state ={
      username: ''
    }

    var userRole = "admin";
  }

  UpdateUsername(username) {
    this.setState({username: username});
    this.forceUpdate();
  }


  render() {
    return (
      <div className="App">
     <Router history={hashHistory}>
       <Route path="/department" component={Department}/>
         <Route path="/" component={Login} UpdateUsername={this.UpdateUsername.bind(this)} />
       <Route path="/admin" component={(props => <Admin username={this.state.username}/>)}/>
       <Route path="/employee" component={(props => <Employee username={this.state.username}/>)}/>
       <Route path="/doctor" component={(props => <Doctor username={this.state.username}/>)}/>
     </Router>

      </div>
    );
  }
}

export default App;
