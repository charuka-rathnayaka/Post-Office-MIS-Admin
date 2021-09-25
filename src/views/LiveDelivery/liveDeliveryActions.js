import * as actionTypes from "./liveDeliveryActionTypes.js";

export function getLocationsRequest(postOffice) {
  return { type: actionTypes.GET_LOCATIONS_REQUEST, postOffice };
}

export function getLocationsSuccess(locationData,postOfficeData) {
    //console.log("loc success here",data)
    return { type: actionTypes.GET_LOCATIONS_SUCCESS, locationData:locationData,postOfficeData:postOfficeData};
  }

export function getLocationsError(error) {
  return { type: actionTypes.GET_LOCATIONS_ERROR, error };
}