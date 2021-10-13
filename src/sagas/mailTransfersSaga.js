import {firestore} from "../firebase/firestore";
import { call, put, take} from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { getTransfersError, getTransfersSuccess } from "../views/MailTransfers/mailTransfersActions";

function* getPostOffices(){
    const ref = firestore.collection("PostOffice"); 
    const channel = eventChannel((emit) => ref.onSnapshot(emit));
    const Data = yield take(channel);
    return Data.docs.map((doc) => {
        const data = doc.data();
        return {
            code:data.code,
            PostOffice:data.city
        }
    });
    
}
function* getTransfers(postOffice,postOffices){
    const postOfficeRef= firestore.collection("PostOffice").doc(postOffice)
    const ref = firestore.collection("PendingMails").where("state","==","Accepted").where("acceptedPostoffice","==",postOfficeRef);
    const channel = eventChannel((emit) => ref.onSnapshot(emit));
    const Data = yield take(channel);
    return Data.docs.map((doc) => {
        const data = doc.data();
        var office=(postOffices.filter((e) =>( e.code == data.destinationPostoffice.id)))[0];
        return {
            pid:doc.id,
            addressNumber:data.recipientDetails.recipientAddressNo,
            city:data.recipientDetails.recipientCity,
            street1:data.recipientDetails?.recipientStreet1,
            street2:data.recipientDetails?.recipientStreet2,
            destinationPostOffice:office.PostOffice,
            destinationPostOfficeCode:office.code,
            type:data.type
        };
    });
}

function* groupTransfers(transferData,postOffices){
    var transfers=[]
    postOffices.forEach((office)=>{
        var mails=(transferData.filter((e) =>( e.destinationPostOfficeCode == office.code)));
        if(mails.length>0){
            transfers.push({
                postOfficeCode:office.code,
                postOffice:office.PostOffice,
                itemCount:mails.length,
                mails:mails
            })
        }
        
    })
    return transfers;
   
}

export function* getTransfersSaga(data){
    try {
        const postOffice=(data.postOffice).toString();
        const postOffices=yield call(getPostOffices);
        const transferData=yield call(getTransfers,postOffice,postOffices);
        const transferAssignments=yield call(groupTransfers,transferData,postOffices)
       //console.log("Assigned - ",transferAssignments[0])
        yield put(getTransfersSuccess(transferAssignments));
    } catch (error) {
        console.log("Erorr -",error);
        yield put(getTransfersError(error));
        
    }
  
}