import * as actionTypes from "./mailAssignmentsActionTypes"

export function getMails(postOffice){
    return {type:actionTypes.GET_MAILS_REQUEST,postOffice}
}

export function getMailsSuccess(assignments,postmenRoutes){
    return {type:actionTypes.GET_MAILS_SUCCESS,assignments,postmenRoutes}
}

export function getMailsError(data){
    return {type:actionTypes.GET_MAILS_ERROR,data}
}

export function changePostman(pid,id){
    return {type:actionTypes.CHANGE_POSTMAN,pid,id}
}

export function submitMailAssignments(assignments){
    return {type:actionTypes.SUBMIT_ASSIGNMENTS_REQUEST,assignments}
}

export function submitMailAssignmentsSuccess(){
    return {type:actionTypes.SUBMIT_ASSIGNMENTS_SUCCESS}
}

export function submitMailAssignmentsError(data){
    return {type:actionTypes.SUBMIT_ASSIGNMENTS_ERROR,data}
}
