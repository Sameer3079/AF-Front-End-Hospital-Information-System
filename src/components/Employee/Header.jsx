import React, {Component} from 'react';
import './Header.css';
class Header extends Component{
   
    render(){
        return(
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">SLHIS</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><i class="fas fa-user-circle fa-2x"></i> Logout</a></li>
                </ul>
                </div>
            </div>
        </nav>
       </div>
        );
    }
}

export default Header;