import {firestore,firebase} from "../firebase/firestore";
import { call, put, take} from "redux-saga/effects";
import {postmenRoutesDataSuccess,postmenRoutesDataError,saveStreetSuccess,saveStreetError,removeStreetSuccess,removeStreetError} from "../views/PostmenRoutes/postmenRoutesActions";
import { eventChannel } from "redux-saga";
import dateFormat from "dateformat";

function* getPostmenRoutesData(data){
    const postOffice=data;
    const state= "postman";
    const postOfficeRef= firestore.collection("PostOffice").doc(postOffice)
    const ref = firestore.collection("Users").where("role","==",state).where("postOffice","==",postOfficeRef);
    const channel = eventChannel((emit) => ref.onSnapshot(emit));
    const Data = yield take(channel);
    return Data.docs.map((doc) => {
        const data = doc.data();
        return{
            userID:doc.id,
            firstName:data.firstName,
            lastName:data.lastName,
            email:data.email,
            NIC:data.NIC,
            contactNumber:data.contactNumber,
            routes:data.route?? []
        }
    });
}

export function* getPostmenRoutesDataSaga(data){
    try {
        const postmenRoutesData=yield call(getPostmenRoutesData,data.postOffice);
       yield put(postmenRoutesDataSuccess(postmenRoutesData));
    } catch (error) {
        console.log("Errorr -",error);
        yield put(postmenRoutesDataError(error));
        
    }
  
}

async function addStreet(data){
    const userID=data.userID;
    const street = data.street;
    const ref = firestore.collection("Users").doc(userID);
    return await ref.update({
        route: firebase.firestore.FieldValue.arrayUnion(street)
    });
    
}

export function* addStreetSaga(data){
    try {
        const saveStreet=yield call(addStreet,data);
        yield put(saveStreetSuccess());
    } catch (error) {
        console.log("Erorr -",error);
        yield put(saveStreetError(error));
        
    }
  
}

async function deleteStreet(data){
    const userID=data.userID;
    const street = data.street;
    const ref = firestore.collection("Users").doc(userID);
    return await ref.update({
        route: firebase.firestore.FieldValue.arrayRemove(street)
    });
    
}


export function* removeStreetSaga(data){
    try {
        const removeStreet=yield call(deleteStreet,data);
        yield put(removeStreetSuccess());
    } catch (error) {
        console.log("Erorr -",error);
        yield put(removeStreetError(error));
        
    }
  
}