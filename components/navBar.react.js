import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component{
    render(){
        return(
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        );
    }
};

export default NavBar;
