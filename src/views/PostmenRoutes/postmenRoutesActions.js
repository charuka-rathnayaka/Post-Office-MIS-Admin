import * as actionTypes from "./postmenRoutesActionTypes";

// getting complins data actions

export function postmenRoutesDataRequest(postOffice) {
  return { type: actionTypes.POSTMEN_ROUTES_DATA_REQUEST,postOffice};
}

export function postmenRoutesDataSuccess(data) {
  return { type: actionTypes.POSTMEN_ROUTES_DATA_SUCCESS,data};
}

export function postmenRoutesDataError(error) {
  return { type: actionTypes.POSTMEN_ROUTES_DATA_ERROR,error};
}


export function saveStreet(userID,street){
    return {type:actionTypes.POSTMAN_ROUTE_SAVE_REQUEST,userID,street}
}

export function saveStreetSuccess(){
    return {type:actionTypes.POSTMAN_ROUTE_SAVE_SUCCESS}
}

export function saveStreetError(data){
    return {type:actionTypes.POSTMAN_ROUTE_SAVE_ERROR,data}
}


export function removeStreet(userID,street){
    return {type:actionTypes.POSTMAN_ROUTE_REMOVE_REQUEST,userID,street}
}

export function removeStreetSuccess(){
    return {type:actionTypes.POSTMAN_ROUTE_REMOVE_SUCCESS}
}

export function removeStreetError(data){
    return {type:actionTypes.POSTMAN_ROUTE_REMOVE_ERROR,data}
}