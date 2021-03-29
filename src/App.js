import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../src/components/Home/Home.js';
import Login from '../src/components/Login/Login.js';
import NotFound from '../src/components/NotFound/NotFound.js';
import Admin from './components/Admin/Admin.js';
import { Menubar } from './components/Menubar/Menubar.js';

const App = () => {
  return(
    <div>
      <BrowserRouter>
      <Menubar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;