import { put } from "redux-saga/effects";
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "./../views/Login/loginActionTypes.js";
import {app} from "../auth/base.js";

export function* loginSaga(request) {
  const email =request.data.emailVal;
  const password =request.data.passwordVal;
  let errorMessage = "";
  try {
    yield app.auth().signInWithEmailAndPassword(email, password);
    yield put({ type: LOGIN_SUCCESS });
  } catch (error) {
    
    switch (error.code) {
      case "auth/user-not-found":
        errorMessage = "Invalid email or password";
        break;
      case "auth/wrong-password":
        errorMessage = "Invalid email or password";
        break;
      case "auth/user-disabled":
        errorMessage = "User with this email has been suspended";
        break;
      default:
        errorMessage = "Something went wrong! Please try again";
        break;
    }
    yield put({ type: LOGIN_ERROR, error: errorMessage });
  }
}

export function logoutSaga() {
  app.auth().signOut();
}
