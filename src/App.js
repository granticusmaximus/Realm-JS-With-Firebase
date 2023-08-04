import React from 'react';
import "./assets/css/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import * as ROUTES from "./utilities/routes";
import Home from './pages/home';

const App = () => (
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <div className="container-body">
      <div>
        <Route exact path={ROUTES.HOME} component={Home} />
      </div>
    </div>
  </BrowserRouter>
);

export default App;