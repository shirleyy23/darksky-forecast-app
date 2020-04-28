import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Forecast from '../../Pages/Forecast/Forecast';

const Router: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/forecast/:id" component={Forecast} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
