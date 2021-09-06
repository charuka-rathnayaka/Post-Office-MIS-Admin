import * as actionTypes from "./loginActionTypes.js";

export function loginRequest(data) {
  return { type: actionTypes.LOGIN_REQUEST, data };
}

export function loginSuccess() {
  return { type: actionTypes.LOGIN_SUCCESS };
}

export function logoutRequest() {
  return { type: actionTypes.LOGOUT_REQUEST };
}

export function saveIdToken(token) {
  return { type: actionTypes.SAVE_ID_TOKEN, token };
}
