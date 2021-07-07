import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Atelie from "./pages/Perfils/Atelie";
import Artistas from "./pages/Perfils/Artistas";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/atelie/:id" component={Atelie} />
        <Route path="/artistas/:id" component={Artistas} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
