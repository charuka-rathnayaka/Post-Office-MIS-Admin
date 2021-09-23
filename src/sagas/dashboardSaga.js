import {firestore} from "../firebase/firestore";
import { call, put, take} from "redux-saga/effects";
import {performanceDataSuccess,performanceDataError} from "../views/Home/Dashboard/dashboardActions";
import { eventChannel } from "redux-saga";
import dateFormat from "dateformat";

function* getPerformanceData(data){
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



function* getRevenueList(data,performanceData){
    var dayList=[]
    for (var d = data.startDate; d <= data.endDate; d.setDate(d.getDate() + 1)) {
        var currDate=dateFormat(new Date(d), "yyyy/mm/dd")
        const reducer = ((previousValue, currentValue) => previousValue + parseFloat(currentValue.cost));
        var normalMailsOnCurr=performanceData.filter((e) =>( e.date == currDate && e.type=="NormalPost"));
        var registeredMailsOnCurr=performanceData.filter((e) =>( e.date == currDate && e.type=="RegisteredPost"));
        var packageOnCurr=performanceData.filter((e) =>( e.date == currDate && e.type=="Package"));
        var moneyOrderOnCurr=performanceData.filter((e) =>( e.date == currDate && e.type=="MoneyOrder"));
        var normalMailTotal=normalMailsOnCurr.reduce(reducer,0);
        var registeredMailTotal=registeredMailsOnCurr.reduce(reducer,0);
        var moneyOrderTotal=moneyOrderOnCurr.reduce(reducer,0);
        var packageTotal=packageOnCurr.reduce(reducer,0);
        dayList.push({
            date:currDate,
            "Normal Mail": normalMailTotal,
            "Registered Mail":registeredMailTotal,
            "Package Delievery":packageTotal,
            "Money Order":moneyOrderTotal
        });
    }
    return dayList;
}



export function* getPerformanceDataSaga(data){
    try {
        const performanceData=yield call(getPerformanceData,data);
        const revenueList=yield call(getRevenueList,data,performanceData)
        // console.log("performance data- ",performanceData)
        yield put(performanceDataSuccess(revenueList));
    } catch (error) {
        console.log("Errorr -",error);
        yield put(performanceDataError(error));
        
    }
  
}