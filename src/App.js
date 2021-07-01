import React, { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Global from "./styles/Global";
import Routes from "./routes";

const App = () => {
  return (
    <div className="App">
      <Global />
      <Routes />
    </div>
  );
};

export default memo(App);
