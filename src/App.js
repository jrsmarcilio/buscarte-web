import React, { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Artistas from "./pages/Artists";
import Global from "./styles/Global";

const App = () => {
  return (
    <div className="App">
      <Global />
      <Home />
      <Artistas />
    </div>
  );
};

export default memo(App);
