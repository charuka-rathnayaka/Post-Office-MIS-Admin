import * as actionTypes from "./registrationActionTypes"

export function addEmployee(data){
    return {type:actionTypes.ADD_EMPLOYEE_REQUEST,data}
}