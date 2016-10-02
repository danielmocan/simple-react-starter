import React, { Component } from 'react';
import NavBar from './navBar.react';

class AboutPage extends React.Component{
    render() {
        return(
            <div>
                <h1>This is AboutPage</h1>
                <NavBar />
                <p>Something interesting should be written here</p>
            </div>
        );
    }
}

export default AboutPage;
