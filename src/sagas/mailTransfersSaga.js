import {firestore} from "../firebase/firestore";
import { call, put, take,all} from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { confirmTransferError, confirmTransferSuccess, getTransfersError, getTransfersSuccess } from "../views/MailTransfers/mailTransfersActions";
import dateFormat from "dateformat";

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


async function markTransfer(date,transfer,acceptedPostoffice) {
    var docID;
    const destinationPostoffice=transfer.postOfficeCode;
    const mails=transfer.mails
    const mailList = mails.map((mail)=>{
        return (
            firestore.collection("PendingMails").doc(mail.pid)
        )
    })
    const relevantDocumentRef = await firestore
      .collection("Transfers")
      .where("date", "==", date)
      .where("destinationPostoffice","==",destinationPostoffice)
      .get();

    if (relevantDocumentRef.empty) {
        var doc =firestore
        .collection("Transfers")
        .doc();
       await (
        doc.set({
          mails: mailList,
          date,
          destinationPostoffice,
          acceptedPostoffice,
          state:"Created"
        })
        .then(() => {
          docID= doc.id;
        })
        .catch((e) => {
          throw e;
        }));
    }
    else{
       await (firestore
        .collection("Transfers")
        .doc(relevantDocumentRef.docs[0].id)
        .update({
          
          mails:mailList
        })
        .then(() => {
          docID= relevantDocumentRef.docs[0].id;
        })
        .catch((e) => {
          throw e;
        }));
    }
        return {
          id:docID,
          postOfficeCode:transfer.postOfficeCode,
          postOffice:transfer.postOffice,
          itemCount:transfer.itemCount,
          mails:mails
    }
}

function* markTransfers(transferAssignments,postOffice){
    const date=new Date();
    const formattedDate=dateFormat(date, "yyyy/mm/dd");
    const transferList= yield all(transferAssignments.map((transfer)=> 
         call (markTransfer,formattedDate,transfer,postOffice)
    ))
    return transferList;
}
  
export function* getTransfersSaga(data){
    try {
        const postOffice=(data.postOffice).toString();
        const postOffices=yield call(getPostOffices);
        const transferData=yield call(getTransfers,postOffice,postOffices);
        const transferAssignments=yield call(groupTransfers,transferData,postOffices)
        let transferMarking=yield call(markTransfers,transferAssignments,postOffice);
        yield put(getTransfersSuccess(transferMarking));
    } catch (error) {
        console.log("Error -",error);
        yield put(getTransfersError(error)); 
    }
}

function* confirmTransfers(transfers){
  return transfers.forEach((transfer)=>{
          var transferRef = firestore.collection('Transfers').doc(transfer.id);
          transferRef.update({
              "state": "Confirmed"
          })
  })  
}

function* confirmMails(transfers){
  return transfers.forEach((transfer)=>{
    return transfer.mails.forEach((mail)=>{
      var mailRef = firestore.collection('PendingMails').doc(mail.pid);
      console.log("Mail update",mail)
      mailRef.update({
          "state": "Transfered"
      })
    })
  })
}

export function* confirmTransfersSaga(data){
  try {
      const transfers=data.transfers;
      const transferConfirm=yield call(confirmTransfers,transfers);
      const mailsConfirm=yield call(confirmMails,transfers);     
      yield put(confirmTransferSuccess());
  } catch (error) {
      console.log("Error -",error);
      yield put(confirmTransferError(error));   
  }
}