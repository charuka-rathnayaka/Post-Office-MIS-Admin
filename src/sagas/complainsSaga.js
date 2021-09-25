import {firestore} from "../firebase/firestore";
import { call, put, take} from "redux-saga/effects";
import { complainsDataSuccess,complainsDataError, markSolvedSuccess,markSolvedError } from "../views/Complains/complainsActions";
import { eventChannel } from "redux-saga";
import dateFormat from "dateformat";

function* getComplainsData(data){
    const postOffice=data;
    const state= "unSolved";
    const postOfficeRef= firestore.collection("PostOffice").doc(postOffice)
    const ref = firestore.collection("Complains").where("state","==",state).where("postoffice","==",postOfficeRef);
    const channel = eventChannel((emit) => ref.onSnapshot(emit));
    const Data = yield take(channel);
    return Data.docs.map((doc) => {
        const data = doc.data();
        return{
            complainID:doc.id,
            name:data.name,
            email:data.email,
            pid:data.pid,
            contactNumber:data.contactNumber,
            date:dateFormat(data.timestamp.toDate(), "yyyy/mm/dd"),
            message:data.message
        }
    });
}

export function* getComplainDataSaga(data){
    try {
        const complainsData=yield call(getComplainsData,data.postOffice);
       yield put(complainsDataSuccess(complainsData));
    } catch (error) {
        console.log("Errorr -",error);
        yield put(complainsDataError(error));
        
    }
  
}



function* markComplainSolved(complainID){
    return firestore
        .collection("Complains")
        .doc(complainID)
        .update({state:"Solved"})
}

export function* setComplainSolvedSaga(data){
    try {
        const complainID=data.data;
        const complainsSolved=yield call(markComplainSolved,complainID);
        yield put(markSolvedSuccess())
    } catch (error) {
       console.log("Errorr -",error);
        yield put(markSolvedError(error));
        
    }
  
}