import { put } from "redux-saga/effects";
import {
  ADD_EMPLOYEE_REQUEST
} from "./../views/Registration/registrationActionTypes.js";
//import {app} from "../auth/base.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../auth/base.js";
// import * as admin from 'firebase-admin/compat';


async function addUserAuth(email,password){
    /*auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user - ",user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error in adding user",error)
    // ..
  });*/
  
  return auth
  .createUser({
    uid: 'some-uid',
    email: email,
    password:password,
  })
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully created new user:', userRecord.uid);
    return userRecord.uid
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
    return error
  });
    /*
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    console.log("user - ",user);
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    console.log("error in adding user",err)
    // alert(err.message);
  }*/
}
export function* addEmployeeSaga(request){
    const email=request.data.email;
    const password=request.data.password;
    const userRegister=addUserAuth(email,password)
    console.log("ADD employee",request.data)
}

