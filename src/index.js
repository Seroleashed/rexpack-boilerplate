import React from "react";
import ReactDOM from "react-dom";
import App from "./js/App";
import "./css/style.scss";
import "./js/libs/holder.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("react-container") // eslint-disable-line no-undef
);
// Needed for Hot Module Replacement
/* eslint-disable */
if (typeof module.hot !== "undefined") {
  module.hot.accept();
}
/* eslint-enable */
