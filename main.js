import React from 'react';
import ReactDOM from 'react-dom';
import routes from './components/routes';
import { Router, hashHistory } from 'react-router';
require("!style!css!sass!./style.scss");


ReactDOM.render( <Router history={hashHistory} routes={routes} />, document.getElementById('app') );
