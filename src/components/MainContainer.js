import React, { Component }         from 'react';
import Header                       from './Layout/Header';
import Sidebar                      from './Layout/Sidebar';

export default class MainContainer extends Component{
    render(){
        return(
            <div>
                 <Header/>
                <Sidebar/>
            </div>
           

        )
    }
}