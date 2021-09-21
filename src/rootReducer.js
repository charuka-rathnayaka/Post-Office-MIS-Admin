import { combineReducers } from "redux";
import loginReducer from "./views/Login/loginReducer.js";
import homeReducer from "./views/Home/homeReducer.js";
import LiveDeliveryReducer from "./views/LiveDelivery/liveDeliveryReducer";
export default combineReducers({
  loginReducer,
  homeReducer,
  LiveDeliveryReducer
});
