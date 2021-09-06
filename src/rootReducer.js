import { combineReducers } from "redux";
import loginReducer from "./views/Login/loginReducer.js";
import homeReducer from "./views/Home/homeReducer.js";
export default combineReducers({
  loginReducer,
  homeReducer
});
