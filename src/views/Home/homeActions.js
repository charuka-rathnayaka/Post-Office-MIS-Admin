import * as actionTypes from "./homeActionTypes";

export function authorizationRequest(data) {
  return { type: actionTypes.AUTHORIZATION_REQUEST,data};
}

export function authorizationSuccess(data,currentUserID,currentUserEmail) {
  return { type: actionTypes.AUTHORIZATION_SUCCESS,data,currentUserID,currentUserEmail};
}

export function authorizationError() {
  return { type: actionTypes.AUTHORIZATION_ERROR };
}


