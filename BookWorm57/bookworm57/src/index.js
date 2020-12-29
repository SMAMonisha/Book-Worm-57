import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";
import { BrowserRouter, Link, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
      <Route path="/" exact component={App}/>
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);