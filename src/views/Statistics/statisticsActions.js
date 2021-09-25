import * as actionTypes from "./statisticActionTypes";

export function countDataRequest(startDate,endDate,postOffice) {
  return { type: actionTypes.COUNT_DATA_REQUEST,startDate,endDate,postOffice};
}

export function countDataSuccess(countList,revenuePieData,countPieData) {
  return { type: actionTypes.COUNT_DATA_SUCCESS,countList,revenuePieData,countPieData};
}

export function countDataError() {
  return { type: actionTypes.COUNT_DATA_ERROR };
}
