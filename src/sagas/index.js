import { all, takeEvery, takeLatest } from "redux-saga/effects";
import * as loginActionTypes from "./../views/Login/loginActionTypes.js";
import * as homeActionTypes from "./../views/Home/homeActionTypes.js";
import * as addEmployeeActionTypes from "./../views/Registration/registrationActionTypes";
import * as liveDeliveryActionTypes from "./../views/LiveDelivery/liveDeliveryActionTypes";
import * as recepActionTypes from "./../views/RecepFunc/recepActionTypes";
import * as dashboardActionTypes from "../views/Home/Dashboard/dashboardActionTypes";
import * as statisticsActionTypes from "./../views/Statistics/statisticActionTypes";
import * as complainsActionTypes from "./../views/Complains/complainsActionTypes"
import { loginSaga,logoutSaga } from "./loginSaga.js";
import { getUserDetailsSaga } from "./homeSaga.js";
import { addEmployeeSaga } from "./employeeRegistrationSaga.js";
import { getLiveLocationsSaga } from "./liveDeliverySaga.js";
import {addPostDetailsSaga} from "./recepSaga.js";
import {getPostOfficeSaga} from "./recepSaga.js";
import { getPerformanceDataSaga } from "./dashboardSaga.js";
import { getCountDataSaga } from "./statisticsSaga.js";
import { getComplainDataSaga,setComplainSolvedSaga } from "./complainsSaga.js";

export default function* root() {
  yield all([
    takeEvery(loginActionTypes.LOGIN_REQUEST, loginSaga),
    takeEvery(loginActionTypes.LOGOUT_REQUEST, logoutSaga),
    takeEvery(homeActionTypes.AUTHORIZATION_REQUEST,getUserDetailsSaga),
    takeEvery(addEmployeeActionTypes.ADD_EMPLOYEE_REQUEST,addEmployeeSaga),
    takeEvery(liveDeliveryActionTypes.GET_LOCATIONS_REQUEST,getLiveLocationsSaga),
    takeEvery(recepActionTypes.ADD_POST_START,addPostDetailsSaga),
    takeLatest(recepActionTypes.GET_POSTOFFICE_START,getPostOfficeSaga),
    takeEvery(dashboardActionTypes.PERFORMANCE_DATA_REQUEST,getPerformanceDataSaga),
    takeEvery(statisticsActionTypes.COUNT_DATA_REQUEST,getCountDataSaga),
    takeEvery(complainsActionTypes.COMPLAINS_DATA_REQUEST,getComplainDataSaga),
    takeEvery(complainsActionTypes.MARK_SOLVED_REQUEST,setComplainSolvedSaga)
  ]);
}