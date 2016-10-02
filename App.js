import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import HomePage from './components/homePage.react';
import AboutPage from './components/aboutPage.react';
import Layout from "./components/layout/layout.react";

class App extends React.Component {
    render(){
        return (
            <Router  history={ browserHistory }>
                <Route path="/" component={Layout}>
                    <IndexRoute component={HomePage} />
                    <Route path="about" component={AboutPage}/>
                </Route>
            </Router>    
        );
    }
}

export default App;
