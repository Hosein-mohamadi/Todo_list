import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GolobalState from "./golobalState/golobalState";

ReactDOM.render(
  <GolobalState>
    <App />
  </GolobalState>,
  document.getElementById("root")
);
