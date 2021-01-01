import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

import Layout from "./pages/Layout";
import Home from "./pages/Home";

import './components/styles/Globals.scss'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Layout>
              <Switch>
                  <Route exact path={'/'} component={Home}/>
              </Switch>
          </Layout>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

