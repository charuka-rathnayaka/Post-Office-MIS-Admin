import { combineReducers } from "redux";
import loginReducer from "./views/Login/loginReducer.js";
import homeReducer from "./views/Home/homeReducer.js";
import LiveDeliveryReducer from "./views/LiveDelivery/liveDeliveryReducer";
import registrationReducer from "./views/Registration/registrationReducer";
import dashboardReducer from "./views/Home/Dashboard/dashboardReducer";
import statisticsReducer from "./views/Statistics/statisticsReducer.js";
import complainsReducer from "./views/Complains/complainsReducer.js";


export default combineReducers({
  loginReducer,
  homeReducer,
  LiveDeliveryReducer,
  registrationReducer,
  dashboardReducer,
  statisticsReducer,
  complainsReducer
});
