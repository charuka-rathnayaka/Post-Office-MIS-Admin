import {firestore} from "../firebase/firestore";
import { call, put, take} from "redux-saga/effects";
import { countDataSuccess, countDataError } from "../views/Statistics/statisticsActions";
import { eventChannel } from "redux-saga";
import dateFormat from "dateformat";

function* getCountDataFromPending(data){
    //console.log("data - ",data.startDate,data.endDate,data.postOffice)
    const postOfficeRef= firestore.collection("PostOffice").doc(data.postOffice)
    const ref = firestore.collection("PendingMails").where("acceptedPostoffice","==",postOfficeRef).where('timestamp', '>',data.startDate).where("timestamp","<",data.endDate);
    const channel = eventChannel((emit) => ref.onSnapshot(emit));
    const Data = yield take(channel);
    return Data.docs.map((doc) => {
        const data = doc.data();
        return{
            cost:data.cost,
            type:data.type,
            date:dateFormat(data.timestamp.toDate(), "yyyy/mm/dd")
        }
        //console.log(data)
        return data;
    });
}


function* getCountDataFromDelievered(data){
    const postOfficeRef= firestore.collection("PostOffice").doc(data.postOffice)
    const ref = firestore.collection("DeliveredMails").where("acceptedPostoffice","==",postOfficeRef).where('timestamp', '>',data.startDate).where("timestamp","<",data.endDate);
    const channel = eventChannel((emit) => ref.onSnapshot(emit));
    const Data = yield take(channel);
    return Data.docs.map((doc) => {
        const data = doc.data();
        return{
            cost:data.cost,
            type:data.type,
            date:dateFormat(data.timestamp.toDate(), "yyyy/mm/dd")
        }
        return data;
    });
}



function* getCountList(data,countData){
    var dayList=[]
    for (var d = data.startDate; d <= data.endDate; d.setDate(d.getDate() + 1)) {
        var currDate=dateFormat(new Date(d), "yyyy/mm/dd")
        var normalMailsOnCurr=countData.filter((e) =>( e.date == currDate && e.type=="NormalPost"));
        var registeredMailsOnCurr=countData.filter((e) =>( e.date == currDate && e.type=="RegisteredPost"));
        var packageOnCurr=countData.filter((e) =>( e.date == currDate && e.type=="Package"));
        var moneyOrderOnCurr=countData.filter((e) =>( e.date == currDate && e.type=="MoneyOrder"));
        var normalMailTotal=normalMailsOnCurr.length;
        var registeredMailTotal=registeredMailsOnCurr.length;
        var moneyOrderTotal=moneyOrderOnCurr.length;
        var packageTotal=packageOnCurr.length;
        dayList.push({
            Date:currDate,
            "Normal Mail": normalMailTotal,
            "Registered Mail":registeredMailTotal,
            "Package Delievery":packageTotal,
            "Money Order":moneyOrderTotal
        });
    }
    return dayList;
}

function* getRevenuePieData(countData){
    var normalMailsList=countData.filter((e) => e.type=="NormalPost");
    var registeredMailsList=countData.filter((e) => e.type=="RegisteredPost");
    var packageList=countData.filter((e) =>( e.type=="Package"));
    var moneyOrderList=countData.filter((e) =>( e.type=="MoneyOrder"));
    const reducer = ((previousValue, currentValue) => previousValue + parseFloat(currentValue.cost));
    var normalMailTotal=normalMailsList.reduce(reducer,0);
    var registeredMailTotal=registeredMailsList.reduce(reducer,0);
    var moneyOrderTotal=moneyOrderList.reduce(reducer,0);
    var packageTotal=packageList.reduce(reducer,0);
    return[
        { name: 'Normal Mail',value: normalMailTotal },
        { name: "Registered Mail",value: registeredMailTotal },
        { name: "Package Delievery",value: packageTotal },
        { name: "Money Order",value: moneyOrderTotal },
    ];
}

function* getCountPieData(countData){
    var normalMailsList=countData.filter((e) => e.type=="NormalPost");
    var registeredMailsList=countData.filter((e) => e.type=="RegisteredPost");
    var packageList=countData.filter((e) =>( e.type=="Package"));
    var moneyOrderList=countData.filter((e) =>( e.type=="MoneyOrder"));
    var normalMailTotal=normalMailsList.length;
    var registeredMailTotal=registeredMailsList.length;
    var moneyOrderTotal=moneyOrderList.length;
    var packageTotal=packageList.length;
    return[
        { name: 'Normal Mail',value: normalMailTotal },
        { name: "Registered Mail",value: registeredMailTotal },
        { name: "Package Delievery",value: packageTotal },
        { name: "Money Order",value: moneyOrderTotal },
    ];
}

export function* getCountDataSaga(data){
    try {
        const countDataPending=yield call(getCountDataFromPending,data);
        const countDataDelivered=yield call(getCountDataFromDelievered,data);
        var countData=[...countDataPending,...countDataDelivered]
        //console.log("Count Date - ",countData)
        const countList=yield call(getCountList,data,countData)
        const revenuePieData=yield call(getRevenuePieData,countData)
        const countPieData=yield call(getCountPieData,countData)
        yield put(countDataSuccess(countList,revenuePieData,countPieData));
    } catch (error) {
        console.log("Errorr -",error);
        yield put(countDataError(error));
        
    }
  
}