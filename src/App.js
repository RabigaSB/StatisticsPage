import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Main from "./containers/Main";
import Statistic from "./containers/Statistic";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/statistic" component={Statistic}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
