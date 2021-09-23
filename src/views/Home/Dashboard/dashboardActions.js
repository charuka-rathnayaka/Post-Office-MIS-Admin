import * as actionTypes from "./dashboardActionTypes";

export function performanceDataRequest(startDate,endDate,postOffice) {
  return { type: actionTypes.PERFORMANCE_DATA_REQUEST,startDate,endDate,postOffice};
}

export function performanceDataSuccess(data) {
  return { type: actionTypes.PERFORMANCE_DATA_SUCCESS,data};
}

export function performanceDataError() {
  return { type: actionTypes.PERFORMANCE_DATA_ERROR };
}
