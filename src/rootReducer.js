import { combineReducers } from "redux";
import loginReducer from "./views/Login/loginReducer.js";
import homeReducer from "./views/Home/homeReducer.js";
import LiveDeliveryReducer from "./views/LiveDelivery/liveDeliveryReducer";
import postOfficeReducer from "./views/RecepFunc/postOfficeReducer";
export default combineReducers({
  loginReducer,
  homeReducer,
  LiveDeliveryReducer,
  postOfficeReducer
});
