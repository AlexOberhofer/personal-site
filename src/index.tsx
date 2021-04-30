import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Navbar } from './component/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </head>
    <Navbar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
