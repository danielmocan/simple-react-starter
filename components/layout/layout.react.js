import React, { Component } from "react";
import NavBar from "../common/navBar.react";
import Footer from "../common/footer.react";
import SideBar from "../common/sideBar.react";

class Layout extends React.Component {
    render (){
        return (
            <div className="container">
                <NavBar />
                <div className="row">
                  <div className="col-md-8">
                    { this.props.children }
                  </div>
                  <div className="col-md-4">
                    <SideBar />
                  </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Layout;
