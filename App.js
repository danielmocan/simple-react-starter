import React from 'react';
import { Router, browserHistory } from 'react-router';
import HomePage from './components/homePage.react';
import AboutPage from './components/aboutPage.react';

class App extends React.Component {
    render() {
        return (
            <Router history={ browserHistory }>
                <Route path="/" components={ HomePage }></Route>
                <Route path="/about" components={ AboutPage }></Route>
            </Router>
        )
    }
}

export default App;
