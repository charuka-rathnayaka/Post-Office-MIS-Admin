import { put } from "redux-saga/effects";
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "./../views/Login/loginActionTypes.js";
import {app} from "../auth/base.js";

export function* loginSaga(request) {
  const { email, password } = request.data;
  let errorMessage = "";
  console.log("In function* loginsaga");
  try {
    app.auth().tenantId = null;
    yield app.auth().signInWithEmailAndPassword(email, password);
    console.log("success")
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
    // console.log("Error occured",errorMessage,error.code);
  }
}

export function logoutSaga() {
  app.auth().signOut();
}
