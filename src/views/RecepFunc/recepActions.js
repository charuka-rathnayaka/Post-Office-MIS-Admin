import * as types from "./recepActionTypes";

export function addPostStart (data){ 
    //console.log(data);
    return{type: types.ADD_POST_START,data}
};

export function addPostSuccess (){
    //console.log(addPostSuccess);
    return{type: types.ADD_POST_SUCCESS}
};

export function addPostFail (error){
    return{type: types.ADD_POST_FAIL,error}
};
export function addRegPostStart (data){ 
    //console.log(data);
    return{type: types.ADD_REG_POST_START,data}
};

export function addRegPostSuccess (){
    //console.log(addPostSuccess);
    return{type: types.ADD_REG_POST_SUCCESS}
};

export function addRegPostFail (error){
    return{type: types.ADD_REG_POST_FAIL,error}
};

export function addLogiPostStart (data){ 
    //console.log(data,num);
    return{type: types.ADD_LOGI_POST_START,data}
};

export function addLogiPostSuccess (){
    //console.log(addPostSuccess);
    return{type: types.ADD_LOGI_POST_SUCCESS}
};

export function addLogiPostFail (error){
    return{type: types.ADD_LOGI_POST_FAIL,error}
};

export function addMoneyOrderStart (data){ 
    //console.log(data);
    return{type: types.ADD_MONEYORDER_START,data}
};

export function addMoneyOrderSuccess (){
    //console.log(addPostSuccess);
    return{type: types.ADD_MONEYORDER_SUCCESS}
};

export function addMoneyOrderFail (error){
    return{type: types.ADD_MONEYORDER_FAIL,error}
};

export function getPostOfficeStart (){
    //console.log("putpost");
    return{type: types.GET_POSTOFFICE_START}
};

export function getPostOfficeSuccess (postOffice){
    return{type: types.GET_POSTOFFICE_SUCCESS,postOffice}
};

export function getPostOfficeFail (error){
    return{type: types.GET_POSTOFFICE_FAIL,error}
};

export function getMoneyOrdersStart (postOfficeID){
    //console.log("putpost");
    return{type: types.GET_MONEYORDERS_START,postOfficeID}
};

export function getMoneyOrdersSuccess (moneyOrders){
    return{type: types.GET_MONEYORDERS_SUCCESS,moneyOrders}
};

export function getMoneyOrdersFail (error){
    return{type: types.GET_MONEYORDERS_FAIL,error}
};
