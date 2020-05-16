import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import ForecastRoute from './ForecastRoute';

const Router: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <ForecastRoute />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
