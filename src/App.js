import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

import Global from "./styles/Global";

const App = () => {
  return (
    <div className="App">
      <Global />
      <Header />
      <Carousel />
      <Home />
    </div>
  );
};

export default App;
