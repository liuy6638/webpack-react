import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Index from "./components/index";
import reducer from "./components/redux/reducer";

import "./assets/css/global.css";

const store = createStore(reducer);


ReactDom.render(
  <Provider store={store}>
    <Index />
  </Provider>
  , document.getElementById("root")
);
