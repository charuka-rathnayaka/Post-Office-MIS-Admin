import * as actionTypes from "./registrationActionTypes"

export function addEmployee(data,idToken){
    return {type:actionTypes.ADD_EMPLOYEE_REQUEST,data,idToken}
}

export function addEmployeeSuccess(){
    return {type:actionTypes.ADD_EMPLOYEE_SUCCESS}
}

export function addEmployeeError(data){
    return {type:actionTypes.ADD_EMPLOYEE_ERROR,data}
}