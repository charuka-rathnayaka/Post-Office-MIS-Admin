import * as types from "./recepActionTypes";

export function addPostStart (data){ 
    console.log(data);
    return{type: types.ADD_POST_START,data}
};

export function addPostSuccess (){
    console.log(addPostSuccess);
    return{type: types.ADD_POST_SUCCESS}
};

export function addPostFail (error){
    return{type: types.ADD_POST_FAIL,error}
};

export function getPostOfficeStart (){
    console.log("putpost");
    return{type: types.GET_POSTOFFICE_START}
};

export function getPostOfficeSuccess (postOffice){
    return{type: types.GET_POSTOFFICE_SUCCESS,postOffice}
};

export function getPostOfficeFail (error){
    return{type: types.GET_POSTOFFICE_FAIL,error}
};

