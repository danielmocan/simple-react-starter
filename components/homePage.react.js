import React, { Component } from 'react';
import NavBar from "./navBar.react";

class HomePage extends React.Component{
    render( ) {
        return (
            <div>
                <h1>This is HomePage</h1>
                <NavBar />
                <p>Some Bla Bla text</p>
            </div>
        );
    }
}

export default HomePage;
