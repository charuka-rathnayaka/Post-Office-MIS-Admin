import { all, takeEvery } from "redux-saga/effects";
import * as loginActionTypes from "./../views/Login/loginActionTypes.js";
import * as homeActionTypes from "./../views/Home/homeActionTypes.js";
import * as addEmployeeActionTypes from "./../views/Registration/registrationActionTypes";
import * as liveDeliveryActionTypes from "./../views/LiveDelivery/liveDeliveryActionTypes";
import * as dashboardActionTypes from "../views/Home/Dashboard/dashboardActionTypes";
import * as statisticsActionTypes from "./../views/Statistics/statisticActionTypes"
import { loginSaga,logoutSaga } from "./loginSaga.js";
import { getUserDetailsSaga } from "./homeSaga.js";
import { addEmployeeSaga } from "./employeeRegistrationSaga.js";
import { getLiveLocationsSaga } from "./liveDeliverySaga.js";
import { getPerformanceDataSaga } from "./dashboardSaga.js";
import { getCountDataSaga } from "./statisticsSaga.js";


export default function* root() {
  yield all([
    takeEvery(loginActionTypes.LOGIN_REQUEST, loginSaga),
    takeEvery(loginActionTypes.LOGOUT_REQUEST, logoutSaga),
    takeEvery(homeActionTypes.AUTHORIZATION_REQUEST,getUserDetailsSaga),
    takeEvery(addEmployeeActionTypes.ADD_EMPLOYEE_REQUEST,addEmployeeSaga),
    takeEvery(liveDeliveryActionTypes.GET_LOCATIONS_REQUEST,getLiveLocationsSaga),
    takeEvery(dashboardActionTypes.PERFORMANCE_DATA_REQUEST,getPerformanceDataSaga),
    takeEvery(statisticsActionTypes.COUNT_DATA_REQUEST,getCountDataSaga)
  ]);
}