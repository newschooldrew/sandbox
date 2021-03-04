import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
import Teams from './Teams.js'
import Contact from './Contact.js'
import Blogs from './Blogs.js'
import Tenets from './Tenets.js'
import MyCards from './MyCards.js'
import "./assets/scss/material-kit-pro-react.scss?v=1.9.0";
// styles
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.4.0";
import "./assets/demo/demo.css?v=1.4.0";
import "./assets/demo/react-demo.css?v=1.4.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route exact path="/teams" component={Teams} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/blogs" component={Blogs} />
    <Route exact path="/tenets" component={Tenets} />
    <Route exact path="/cards" component={MyCards} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
