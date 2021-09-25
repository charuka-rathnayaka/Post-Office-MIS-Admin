import * as actionTypes from "./registrationActionTypes"

export function addEmployee(data){
    return {type:actionTypes.ADD_EMPLOYEE_REQUEST,data}
}

export function addEmployeeSuccess(){
    return {type:actionTypes.ADD_EMPLOYEE_SUCCESS}
}

export function addEmployeeError(data){
    return {type:actionTypes.ADD_EMPLOYEE_ERROR,data}
}