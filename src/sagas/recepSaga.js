
import { call,put,take} from "redux-saga/effects";
import {firestore} from "../firebase/firestore";

import firebase from 'firebase/compat/app';
import { addPostSuccess } from "../views/RecepFunc/recepActions";
import { eventChannel } from "redux-saga";
import {getPostOfficeSuccess,getMoneyOrdersSuccess} from "../views/RecepFunc/recepActions";





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

async function addRegPostDetails(senderName,senderAddressNo,senderStreet1,senderStreet2,senderCity,senderEmail,recipientName,recipientAddressNo,recipientStreet1,recipientStreet2,recipientCity,cost,pid,loc_lat,loc_long,employee,acceptedPostoffice,destinationPostoffice){
     
      
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
        senderDetails:{
            senderName:senderName,
            senderAddressNo:senderAddressNo,
            senderStreet1:senderStreet1,
            senderStreet2:senderStreet2,
            senderCity:senderCity,
            senderEmail:senderEmail
        },
        
        cost:cost,
        type: "RegisteredPost",
        timestamp:firebase.firestore.Timestamp.now(),
        deliverAttempt:false,
        signature:""
    })
    .catch((e)=>{
        console.log("Error occured");
        return null;
    })
    
}

async function addLogiPostDetails(senderName,senderAddressNo,senderStreet1,senderStreet2,senderCity,senderEmail,recipientName,recipientAddressNo,recipientStreet1,recipientStreet2,recipientCity,recipientEmail,cost,pid,loc_lat,loc_long,employee,acceptedPostoffice,destinationPostoffice,weight){
     
      
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
            recipientCity:recipientCity,
            recipientEmail:recipientEmail
        },
        senderDetails:{
            senderName:senderName,
            senderAddressNo:senderAddressNo,
            senderStreet1:senderStreet1,
            senderStreet2:senderStreet2,
            senderCity:senderCity,
            senderEmail:senderEmail
        },
        
        cost:cost,
        type: "Package",
        timestamp:firebase.firestore.Timestamp.now(),
        deliverAttempt:false,
        signature:"",
        weight:weight
    })
    .catch((e)=>{
        console.log("Error occured");
        return null;
    })
    
}

async function addMoneyOrderDetails(recipientName,recipientID,senderName,senderID,cost,pid,loc_lat,loc_long,employee,acceptedPostoffice,destinationPostoffice,moneyAmount,securityCode){
     
      
    return firestore
    .collection("PendingMails")
    .add({
        
        acceptedPostoffice:firestore.doc('PostOffice/'+acceptedPostoffice),
        destinationPostoffice:firestore.doc('PostOffice/'+destinationPostoffice),
        histories:[{
            action:"Accepted",
            employee:firestore.doc('Users/'+employee)
        }],
        
        pid:pid,
        
        recipientDetails:{
            recipientName:recipientName,
            recipientID:recipientID,
        },
        senderDetails:{
            senderName:senderName,
            senderID:senderID,
        },
        
        cost:cost,
        type: "MoneyOrder",
        timestamp:firebase.firestore.Timestamp.now(),
        moneyAmount:moneyAmount,
        securityCode:securityCode
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
    //console.log("Charitha");
    return Data.docs.map((doc: any) => {
        const data = doc.data();
        const documentID = doc.id;
        //console.log(data.city);
        return {
            
            code: documentID,
            city:data.city,
            location:data.location,
            
        };
        
        
    });
      
  
}

function* getMoneyOrders(){
    
    const ref = firestore.collection("PendingMails").where("type",'==',"MoneyOrder");
    const channel = eventChannel((emit) => ref.onSnapshot(emit));

    const Data = yield take(channel);
    //console.log("Charitha");
    return Data.docs.map((doc: any) => {
        const data = doc.data();
        //const documentID = doc.id;
        console.log(data.recipientDetails.recipientID);
        return {
            moneyAmount:data.moneyAmount,
            pid:data.pid,
            recipientID:data.recipientDetails.recipientID,
            recipientName:data.recipientDetails.recipientName,
            securityCode:data.securityCode,
            senderID:data.senderDetails.senderID,
            senderName:data.senderDetails.senderName,
            timestamp:data.timestamp
            
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
    const pid=data.data.values.pid+data.num
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

export function* addRegPostDetailsSaga(data){

    //console.log("addpostsaga",data.data.values) 
    const senderName=data.data.values.senderName
    const senderAddressNo=data.data.values.senderAddressNo
    const senderStreet1=data.data.values.senderStreet1
    const senderStreet2=data.data.values.senderStreet2
    const senderCity=data.data.values.senderCity
    const senderEmail=data.data.values.senderEmail  
    const recipientName = data.data.values.recipientName
    const recipientAddressNo= data.data.values.recipientAddressNo
    const recipientStreet1=data.data.values.recipientStreet1
    const recipientStreet2=data.data.values.recipientStreet2
    const recipientCity =data.data.values.recipientCity
    const cost=data.data.values.cost
    const pid=data.data.values.pid+data.num
    const loc_long=data.data.values.long
    const loc_lat=data.data.values.lat
    const employee=data.data.values.employee
    const acceptedPostoffice=data.data.values.acceptedPostOffice
    const destinationPostoffice=data.data.values.destinationPostOffice
    
    console.log(senderStreet1);
    let result = yield call(addRegPostDetails,senderName,senderAddressNo,senderStreet1,senderStreet2,senderCity,senderEmail,recipientName,recipientAddressNo,recipientStreet1,recipientStreet2,recipientCity,cost,pid,loc_lat,loc_long,employee,acceptedPostoffice,destinationPostoffice);
    console.log("res add",result)
    
    yield put(addPostSuccess(result));
    
}

export function* addLogiPostDetailsSaga(data){
    //console.log("num",data.num);
    //console.log("addpostsaga",data.data.values)  
    const senderName=data.data.values.senderName
    const senderAddressNo=data.data.values.senderAddressNo
    const senderStreet1=data.data.values.senderStreet1
    const senderStreet2=data.data.values.senderStreet2
    const senderCity=data.data.values.senderCity
    const senderEmail=data.data.values.senderEmail  
    const recipientName = data.data.values.recipientName
    const recipientAddressNo= data.data.values.recipientAddressNo
    const recipientStreet1=data.data.values.recipientStreet1
    const recipientStreet2=data.data.values.recipientStreet2
    const recipientCity =data.data.values.recipientCity
    const recipientEmail=data.data.values.recipientEmail 
    const cost=data.data.values.cost
    const pid=data.data.values.pid+data.num
    const loc_long=data.data.values.long
    const loc_lat=data.data.values.lat
    const employee=data.data.values.employee
    const acceptedPostoffice=data.data.values.acceptedPostOffice
    const destinationPostoffice=data.data.values.destinationPostOffice
    const weight=data.data.values.weight
    
    
    let result = yield call(addLogiPostDetails,senderName,senderAddressNo,senderStreet1,senderStreet2,senderCity,senderEmail,recipientName,recipientAddressNo,recipientStreet1,recipientStreet2,recipientCity,recipientEmail,cost,pid,loc_lat,loc_long,employee,acceptedPostoffice,destinationPostoffice,weight);
    console.log("res add",result)
    
    yield put(addPostSuccess(result));
    
}

export function* addMoneyOrderDetailsSaga(data){

    //console.log("addpostsaga",data.data.values)   
    const recipientName = data.data.values.recipientName
    const recipientID= data.data.values.recipientID
    const senderName=data.data.values.senderName
    const senderID=data.data.values.senderID
    const cost=data.data.values.cost
    const pid=data.data.values.pid+data.num
    const loc_long=data.data.values.long
    const loc_lat=data.data.values.lat
    const employee=data.data.values.employee
    const acceptedPostoffice=data.data.values.acceptedPostOffice
    const destinationPostoffice=data.data.values.destinationPostOffice
    const moneyAmount=data.data.values.moneyAmount
    const securityCode=data.data.values.securityCode
    
    //console.log(employee);
    let result = yield call(addMoneyOrderDetails,recipientName,recipientID,senderName,senderID,cost,pid,loc_lat,loc_long,employee,acceptedPostoffice,destinationPostoffice,moneyAmount,securityCode);
    //console.log("res add",result)
    
    yield put(addPostSuccess(result));
    
}
export function* getPostOfficeSaga(){ 
    
    let postOffice = yield call(getPostOffice);
    
    //console.log("res ",postOffice);
    yield put(getPostOfficeSuccess(postOffice));
    
}

export function* getMoneyOrdersSaga(){ 
    
    let moneyOrders = yield call(getMoneyOrders);
    
    //console.log("res ",postOffice);
    yield put(getMoneyOrdersSuccess(moneyOrders));
    
}



