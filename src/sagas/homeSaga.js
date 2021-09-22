import {AUTHORIZATION_REQUEST,AUTHORIZATION_SUCCESS,AUTHORIZATION_ERROR} from "./../views/Home/homeActionTypes.js";
import {app} from "../auth/base.js";
import {firestore} from "../firebase/firestore";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {authorizationSuccess} from "../views/Home/homeActions";


async function getUserDetails(uID,email){
    return firestore
        .collection("Users")
        .doc(uID)
        .get()
        .then((doc)=>{
            var userData=doc.data();
            //console.log("post office ",userData.postOffice.id)
            return userData;
        })
        .catch((e)=>{
            console.log("Error occured");
            return null;
        })

}
export function* getUserDetailsSaga(data){
    const currentUserID=data.data.uID;
    const currentUserEmail=data.data.email;
    // console.log("saga -",currentUserEmail,currentUserID)
    try {
        let data = yield call(getUserDetails,currentUserID,currentUserEmail);
        // console.log("res ",result)
        
        //const userHierarchy = getAllowedUserHierarchy(result);
        yield put(authorizationSuccess(data,currentUserID,currentUserEmail));
  } catch (e) {
        //yield put(fetchUserFailureAction(e.toString()));
  }
}