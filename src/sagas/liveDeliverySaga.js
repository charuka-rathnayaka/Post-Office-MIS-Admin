import {firestore} from "../firebase/firestore";
import { call, put, take, takeEvery } from "redux-saga/effects";
import {getLocationsSuccess,getLocationsError} from "../views/LiveDelivery/liveDeliveryActions";
import { eventChannel } from "redux-saga";
import dateFormat from "dateformat";

function* getLiveLocations(data) {
  const date=new Date();
  const formattedDate=dateFormat(date, "yyyy/mm/dd");
  const role="postman"
  const ref = firestore.collectionGroup("locations").where("date", "==", formattedDate);
  const channel = eventChannel((emit) => ref.onSnapshot(emit));
  try {
    const Data = yield take(channel);
        return Data.docs.map((doc: any) => {
            const data = doc.data();
            const documentID = doc.ref.parent.parent?.id || "";
            if (data.geoLocations.length > 0) {
            const history = data.geoLocations.sort((a, b) => b.timestamp.seconds - a.timestamp.seconds);
            const latestElement = history[0];
            return {
                userDocumentID: documentID,
                timeStamp: latestElement.timestamp.seconds * 1000,
                location: {
                lng: latestElement.location?.longitude || 0,
                lat: latestElement.location?.latitude || 0
                }
            };
            }
            return null;
        });
      } catch (error) {
      console.log("Error when locations retireved'")
      return "Error";
  }
}

function* getPostmanDetails(postOffice) {
  const role="postman"
  const ref = firestore.collection("Users").where("role","==",role);
  const channel = eventChannel((emit) => ref.onSnapshot(emit));
  try {  
    const Data = yield take(channel);
        return Data.docs.map((doc: any) => {
            const data = doc.data();
            const documentID = doc.id;
            if(data.postOffice.id===postOffice){
                return {
                    userDocumentID: documentID,
                    firstName:data.firstName,
                    lastName:data.lastName,
                    contactNumber:data.contactNumber,
                    email:data.email,
                    postOffice:data.postOffice.id
                };
            }
            return null;
        });
      } catch (error) {
      console.log("Error when taking postman details")
      return "Error";
  }
}

async function getPostOffice(postOffice){
    return firestore
        .collection("PostOffice")
        .doc(postOffice)
        .get()
        .then((doc)=>{
            var userData=doc.data();
            return userData;
        })
        .catch((e)=>{
            console.log("Error occured");
            return null;
        })

}

export function* getLiveLocationsSaga(data){
    try {
        const postOffice=data.postOffice
        const locations=yield call(getLiveLocations);
        const postmen=yield call(getPostmanDetails,postOffice);
        const postOfficeData=yield call(getPostOffice,postOffice);
        if(locations!="Error"){
            yield put(getLocationsSuccess(locations,postmen,postOfficeData));
        }
        else{
            yield put(getLocationsError("Unknown Error"))
        }
    } catch (error) {
        console.log("Errorr -",error);
        yield put(getLocationsError(error))
    }
  
}
