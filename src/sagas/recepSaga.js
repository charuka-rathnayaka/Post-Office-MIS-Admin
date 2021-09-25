
import { call,put,take} from "redux-saga/effects";
import {firestore} from "../firebase/firestore";

import firebase from 'firebase/compat/app';
import { addPostSuccess } from "../views/RecepFunc/recepActions";
import { eventChannel } from "redux-saga";
import {getPostOfficeSuccess,getPostOfficeFail} from "../views/RecepFunc/recepActions";





async function addPostDetails(recipientName,recipientAddressNo,recipientStreet1,recipientStreet2,recipientCity,cost,pid,loc_lat,loc_long,employee,acceptedPostoffice,destinationPostoffice){
     
      
    return firestore
    .collection("PendingMails")
    .add({
        
        acceptedPostoffice:firestore.doc('PostOffice/'+acceptedPostoffice),
        destinationPostoffice:firestore.doc('PostOffice/'+destinationPostoffice),
        histories:[{
            action:"Accepted",
            employee:firestore.doc('Users/'+employee)
        }],
        locations:[{
            location:new firebase.firestore.GeoPoint(loc_lat,loc_long),
            timestamp:firebase.firestore.Timestamp.now()
        }],

        pid:pid,
        
        recipientDetails:{
            recipientName:recipientName,
            recipientAddressNo:recipientAddressNo,
            recipientStreet1:recipientStreet1,
            recipientStreet2:recipientStreet2,
            recipientCity:recipientCity
        },
        
        cost:cost,
        type: "NormalPost",
        timestamp:firebase.firestore.Timestamp.now(),
        deliverAttempt:false
    })
    .catch((e)=>{
        console.log("Error occured");
        return null;
    })
    
}
function* getPostOffice(){
    
    const ref = firestore.collection("PostOffice");
    const channel = eventChannel((emit) => ref.onSnapshot(emit));

    const Data = yield take(channel);
    console.log("Charitha");
    return Data.docs.map((doc: any) => {
        const data = doc.data();
        const documentID = doc.id;
        console.log(data.city);
        return {
            
            code: documentID,
            city:data.city,
            location:data.location,
            
        };
        
        
    });
      
  
}
    
export function* addPostDetailsSaga(data){

    //console.log("addpostsaga",data.data.values)   
    const recipientName = data.data.values.recipientName
    const recipientAddressNo= data.data.values.recipientAddressNo
    const recipientStreet1=data.data.values.recipientStreet1
    const recipientStreet2=data.data.values.recipientStreet2
    const recipientCity =data.data.values.recipientCity
    const cost=data.data.values.cost
    const pid=data.data.values.pid
    const loc_long=data.data.values.long
    const loc_lat=data.data.values.lat
    const employee=data.data.values.employee
    const acceptedPostoffice=data.data.values.acceptedPostOffice
    const destinationPostoffice=data.data.values.destinationPostOffice
    
    console.log(employee);
    let result = yield call(addPostDetails,recipientName,recipientAddressNo,recipientStreet1,recipientStreet2,recipientCity,cost,pid,loc_lat,loc_long,employee,acceptedPostoffice,destinationPostoffice);
    console.log("res add",result)
    
    yield put(addPostSuccess(result));
    
}
export function* getPostOfficeSaga(){ 
    
    let postOffice = yield call(getPostOffice);
    
    console.log("res ",postOffice);
    yield put(getPostOfficeSuccess(postOffice));
    
}



