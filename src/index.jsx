import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./redux/reducer";
import Routers from "./routers"

import "./assets/css/global.css";
import "../node_modules/antd/dist/antd.css";

const store = createStore(reducer);

ReactDom.render(
  <Provider store={store}>
    <Routers />
  </Provider>
  , document.getElementById("root")
);
