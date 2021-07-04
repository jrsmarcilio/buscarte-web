import React, { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import Global from "./styles/Global";
import Routes from "./routes";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Global />
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default memo(App);
