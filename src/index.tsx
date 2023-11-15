import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.module.scss";
import Router  from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);