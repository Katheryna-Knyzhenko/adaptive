import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import Main from './MainPage/Main';
import Bootstrap from "./Bootstrap/Bootstrap";
import GulpLearning from "./GulpLearning/GulpLearning";

ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route  path="/bootstrap" component={Bootstrap} />
        <Route  path="/gulpLearning" component={GulpLearning} />
    </BrowserRouter>,
  document.getElementById('root')
);


