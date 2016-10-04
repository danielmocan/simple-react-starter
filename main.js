import React from 'react';
import ReactDOM from 'react-dom';
import routes from './components/routes';
import { Router, browserHistory } from 'react-router';
require("!style!css!sass!./style.scss");


ReactDOM.render( <Router history={browserHistory} routes={routes} />, document.getElementById('app') );
