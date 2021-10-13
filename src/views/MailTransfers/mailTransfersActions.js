import * as actionTypes from "./mailTransfersActionTypes"

export function getTransfers(postOffice){
    return {type:actionTypes.GET_TRANSFERS_REQUEST,postOffice}
}

export function getTransfersSuccess(transfers){
    return {type:actionTypes.GET_TRANSFERS_SUCCESS,transfers}
}

export function getTransfersError(data){
    return {type:actionTypes.GET_TRANSFERS_ERROR,data}
}