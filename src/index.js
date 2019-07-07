import React from "react";
import ReactDOM from "react-dom";
import App from "./js/App";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./js/libs/holder.min.js";
ReactDOM.render(
  <App />,
  document.getElementById("react-container") // eslint-disable-line no-undef
);
// Needed for Hot Module Replacement
// eslint-disable-line no-undef
if (typeof module.hot !== "undefined") {
  module.hot.accept(); // eslint-disable-line no-undef
}
