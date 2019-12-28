import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

export default middlewareEnhancer;
