
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";

const app = (
    <BrowserRouter basename="/">
        <App />
    </BrowserRouter>);

ReactDOM.render(app,
    document.getElementById('root')
);
