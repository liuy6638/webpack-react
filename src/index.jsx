import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import Routers from "./routers";
import store from "./store";

import "./assets/css/global.css";
import "../node_modules/antd/dist/antd.css";

ReactDom.render(
  <Provider store={store}>
    <Routers />
  </Provider>
  , document.getElementById("root")
);
