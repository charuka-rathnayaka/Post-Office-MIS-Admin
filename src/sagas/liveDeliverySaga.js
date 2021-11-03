import {firestore} from "../firebase/firestore";
import { call, put, take, takeEvery } from "redux-saga/effects";
import {getLocationsSuccess,getLocationsError} from "../views/LiveDelivery/liveDeliveryActions";
import { eventChannel } from "redux-saga";
import dateFormat from "dateformat";

function* getLiveLocations(data) {
  const date=new Date();
  const formattedDate=dateFormat(date, "yyyy/mm/dd");
  const role="postman";
  const ref = firestore.collectionGroup("locations").where("date", "==", formattedDate);
  const channel = eventChannel((emit) => ref.onSnapshot(emit));
  while(true){
    try {
        console.log("trying")
        const Data = yield take(channel);
            return Data.docs.map((doc) => {
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
}

function* getPostmanDetails(postOffice) {
  const postOfficeRef= firestore.collection("PostOffice").doc(postOffice)
  const role="postman"
  const ref = firestore.collection("Users").where("role","==",role).where("postOffice","==",postOfficeRef);
  const channel = eventChannel((emit) => ref.onSnapshot(emit));
  console.log("getting postmen")
  try {  
    const Data = yield take(channel);
        return Data.docs.map((doc) => {
            const data = doc.data();
            const documentID = doc.id;
            return {
                userDocumentID: documentID,
                firstName:data.firstName,
                lastName:data.lastName,
                contactNumber:data.contactNumber,
                email:data.email,
                postOffice:data.postOffice.id
            };
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


function* getDataList(locations,postmen){
    const data= postmen.map((postman)=>{
        var location=locations.filter((e) => e.userDocumentID==postman.userDocumentID);
            const loc=location[0];
            return {
                userDocumentID: postman.documentID,
                firstName:postman.firstName,
                lastName:postman.lastName,
                contactNumber:postman.contactNumber,
                email:postman.email,
                postOffice:postman.postOffice,
                timeStamp: loc?.timeStamp,
                location: {
                    lng: loc?.location.lng || 0,
                    lat: loc?.location.lat || 0
                }
            }
    })
    return data;
}
export function* getLiveLocationsSaga(data){
    try {
        const postOffice=data.postOffice
        const locations=yield call(getLiveLocations);
        const postmen=yield call(getPostmanDetails,postOffice);
        const postOfficeData=yield call(getPostOffice,postOffice);
        const locationData=yield call(getDataList,locations,postmen)
        if(locations!="Error"){
            yield put(getLocationsSuccess(locationData,postOfficeData));
        }
        else{
            yield put(getLocationsError("Unknown Error"))
        }
    } catch (error) {
        console.log("Errorr -",error);
        yield put(getLocationsError(error))
    }
  
}
