import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/config";

import "./assets/reset.scss";

import "./assets/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store()}>
    <App />
  </Provider>
);
