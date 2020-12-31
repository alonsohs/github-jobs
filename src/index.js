import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch, Route} from 'react-router-dom';


import Home from "./pages/Home";

import './components/styles/Globals.scss'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Switch>
              <Route exact path={'/'} component={Home}/>
          </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

