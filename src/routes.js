import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Atelie from "./pages/HomeAtelie";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/atelies/:nome" component={Atelie} />
    </BrowserRouter>
  );
};

export default Routes;
