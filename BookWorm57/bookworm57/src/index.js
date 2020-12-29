import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";
import { BrowserRouter, Link, Route } from "react-router-dom";
import BookDetailsScreen from './Components/BookDetails';
import Navbar from "./Components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <div>
      <Route path="/" exact component={App}/>
      <Route path='/volumes/:id' exact={true} component={BookDetailsScreen}/>
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);