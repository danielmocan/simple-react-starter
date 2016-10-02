import React, { Component } from "react";
import NavBar from "../navBar.react";

class Layout extends React.Component {
    render (){
        return (
            <div>
                <NavBar />
                { this.props.children }
            </div>
        );
    }
}

export default Layout;
