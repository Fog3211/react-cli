import React from 'react';
import ReactDom from 'react-dom';
import Root from './router/routes.js';
import './css/style.css';
import {HashRouter} from 'react-router-dom';

ReactDom.render(
    <HashRouter>
    <Root/>
    </HashRouter>,
    document.getElementById('root')
);