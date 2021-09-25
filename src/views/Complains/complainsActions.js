import * as actionTypes from "./complainsActionTypes";

// getting complins data actions

export function complainsDataRequest(postOffice) {
  return { type: actionTypes.COMPLAINS_DATA_REQUEST,postOffice};
}

export function complainsDataSuccess(data) {
  return { type: actionTypes.COMPLAINS_DATA_SUCCESS,data};
}

export function complainsDataError(error) {
  return { type: actionTypes.COMPLAINS_DATA_ERROR,error};
}



//marking complain solved actions

export function markSolvedRequest(data) {
  return { type: actionTypes. MARK_SOLVED_REQUEST,data};
}

export function markSolvedSuccess() {
  return { type: actionTypes.MARK_SOLVED_SUCCESS,};
}

export function markSolvedError(error) {
  return { type: actionTypes. MARK_SOLVED_ERROR,error};
}
