import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import Main from './MainPage/Main';

ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/" component={Main} />
    </BrowserRouter>,
  document.getElementById('root')
);


