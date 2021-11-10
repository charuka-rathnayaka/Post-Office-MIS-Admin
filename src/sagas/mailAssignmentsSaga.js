import {firestore} from "../firebase/firestore";
import { call, put, take} from "redux-saga/effects";
import { getMailsSuccess,getMailsError } from "../views/MailAssignments/mailAssignmentsActions";
import { submitMailAssignmentsSuccess, submitMailAssignmentsError } from "../views/MailAssignments/mailAssignmentsActions";
import { eventChannel } from "redux-saga";
import dateFormat from "dateformat";
import { arrayUnion } from "firebase/firestore";

function* getMails(postOffice){
    const postOfficeRef= firestore.collection("PostOffice").doc(postOffice)
    const ref = firestore.collection("PendingMails").where("state","==","DestinationArrived").where("destinationPostoffice","==",postOfficeRef);
    const channel = eventChannel((emit) => ref.onSnapshot(emit));
    const Data = yield take(channel);
    return Data.docs.map((doc) => {
        const data = doc.data();
        return {
            pid:doc.id,
            addressNumber:data.recipientDetails.recipientAddressNo,
            city:data.recipientDetails.recipientCity,
            recepientName:data.recipientDetails.recipientName,
            street1:data.recipientDetails?.recipientStreet1,
            street2:data.recipientDetails?.recipientStreet2
        };
    });
}

function* getPostmenRoutes(postOffice){
    const postOfficeRef= firestore.collection("PostOffice").doc(postOffice)
    const ref = firestore.collection("Users").where("role","==","postman").where("postOffice","==",postOfficeRef);
    const channel = eventChannel((emit) => ref.onSnapshot(emit));
    const Data = yield take(channel);
    return Data.docs.map((doc) => {
        const data = doc.data();
        return {
            id:doc.id,
            email:data.email,
            lastName:data.lastName,
            firstName:data.firstName,
            routes:data.route,
        };
    });
}


function* assignPostmen(mailsData,postmenRoutes){
    return mailsData.map((mail)=>{
        const availablePostmen = postmenRoutes.filter((postman)=>(postman.routes?.includes(mail.street1) || (postman.routes?.includes(mail.street2))))
        //console.log("asign - ",mail,availablePostmen)
        const availablePostman=availablePostmen[0];
        return {
            pid:mail.pid,
            addressNumber:mail.addressNumber,
            city:mail.city,
            street1:mail?.street1,
            street2:mail.street2?mail.street2:"-",
            postmanID:availablePostman?availablePostman.id:"-",
            postmanEmail: availablePostman?availablePostman.email:"-",
            postmanFirstName:availablePostman?availablePostman.firstName:"-",
            postmanLastName:availablePostman?availablePostman.lastName:"-"
        }
    })
}

export function* getMailsSaga(data){
    try {
        const mailsData=yield call(getMails,data.postOffice);
        const postmenRoutes=yield call(getPostmenRoutes,data.postOffice);
        const assignments=yield call(assignPostmen,mailsData,postmenRoutes)
        //console.log("Assignments - ",assignments)
        yield put(getMailsSuccess(assignments,postmenRoutes));
    } catch (error) {
        console.log("Erorr -",error);
        yield put(getMailsError(error));
        
    }
  
}




function* submitAssignments(assignments){
    // console.log("Assignments - ",assignments);
    return assignments.forEach((assignment)=>{
        if(assignment.postmanID!="-"){
            var Mailref = firestore.collection('PendingMails').doc(assignment.pid);
            Mailref.update({
                "pid":assignment.pid,
                "state": "Assigned",
                "histories": arrayUnion({action:"Assigned",employee:firestore.doc('Users/' +assignment.postmanID)})
            })
        }
    })
    
}



export function* submitAssignmentsSaga(data){
    try {
        const submitAssign=yield call(submitAssignments,data.assignments);
        yield put(submitMailAssignmentsSuccess());
    } catch (error) {
        console.log("Erorr -",error);
        yield put(submitMailAssignmentsError(error));
        
    }
  
}