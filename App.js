import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import HomePage from './components/homePage.react';
import AboutPage from './components/aboutPage.react';

class App extends React.Component {
    render(){
        console.log("caca");
        return (
            <Router history={ browserHistory }>
                <Route path="/" component={HomePage}></Route>
                <Route path="/about" component={AboutPage}/>
            </Router>
        );
    }
}

export default App;
