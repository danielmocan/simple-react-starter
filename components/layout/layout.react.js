import React, { Component } from "react";
import NavBar from "../common/navBar.react";

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
