import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.module.scss";
import Carte from "./pages/Carte";

ReactDOM.render(
  <React.StrictMode>
    <Carte />
  </React.StrictMode>,
  document.getElementById('root')
);