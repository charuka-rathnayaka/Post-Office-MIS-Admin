import { call,put } from "redux-saga/effects";
import {
  ADD_EMPLOYEE_REQUEST
} from "./../views/Registration/registrationActionTypes.js";
//import {app} from "../auth/base.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../auth/base.js";
import {
  addEmployeeSuccess,
  addEmployeeError
} from "./../views/Registration/registrationAction.js";
import axios from "axios";

export async function addEmployee(request){
    const email=request.data.email;
    const password=request.data.password1;
    const firstName=request.data.firstName;
    const lastName=request.data.lastName;
    const contactNumber=request.data.contactNumber;
    const NIc=request.data.nic;
    const postOffice=request.data.postOffice;
    const role=request.data.role;
    const userID=request.data.userID
    const idToken=request.idToken;
    const result =await axios({
      method: "post",
      url: "http://localhost:5001/post-office-mis-325210/us-central1/app/create-user",
      params: {idToken:idToken,email:email,firstName:firstName,password:password,lastname:lastName,contactNumber:contactNumber,NIC:NIc,postOffice:postOffice,role:role,userID:userID},
      headers: {"Content-Type": "multipart/form-data" },
    })
      .then(function (response) {   
        return response.status;
      })
      return result;
}

export function* addEmployeeSaga(request){
  try {
        const data = yield (addEmployee(request));
        if (data==201){ 
            yield put(addEmployeeSuccess());
        }
        else{
          yield put(addEmployeeError("Unexpected Error"));
        }
      
        
  } catch (e) {
        yield put(addEmployeeError(e.toString()));
  }
}



