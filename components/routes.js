import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import HomePage from './homePage.react';
import AboutPage from './aboutPage.react';
import ContactPage from './contactPage.react';
import Layout from "./layout/layout.react";

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage}/>
        <Route path="contact" component={ContactPage}/>
    </Route>
)
