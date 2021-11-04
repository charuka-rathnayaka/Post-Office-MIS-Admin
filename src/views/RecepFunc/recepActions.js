import * as types from "./recepActionTypes";

export function addPostStart (data){ 
    //console.log(data);
    return{type: types.ADD_POST_START,data}
};

export function addPostSuccess (pid){
    console.log("at addpostsuccess",pid);
    return{type: types.ADD_POST_SUCCESS,pid}
};

export function addPostFail (error){
    return{type: types.ADD_POST_FAIL,error}
};
export function addRegPostStart (data){ 
    //console.log(data);
    return{type: types.ADD_REG_POST_START,data}
};

export function addRegPostSuccess (pid){
    //console.log(addPostSuccess);
    return{type: types.ADD_REG_POST_SUCCESS,pid}
};

export function addRegPostFail (error){
    return{type: types.ADD_REG_POST_FAIL,error}
};

export function addLogiPostStart (data){ 
    //console.log(data,num);
    return{type: types.ADD_LOGI_POST_START,data}
};

export function addLogiPostSuccess (pid){
    //console.log(addPostSuccess);
    return{type: types.ADD_LOGI_POST_SUCCESS,pid}
};

export function addLogiPostFail (error){
    return{type: types.ADD_LOGI_POST_FAIL,error}
};

export function addMoneyOrderStart (data){ 
    //console.log(data);
    return{type: types.ADD_MONEYORDER_START,data}
};

export function addMoneyOrderSuccess (pid){
    //console.log(addPostSuccess);
    return{type: types.ADD_MONEYORDER_SUCCESS,pid}
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
export function removeMoneyOrderStart (id,userID){ 
    //console.log(id);
    return{type: types.REMOVE_MONEY_ORDER_START,id,userID}
};

export function removeMoneyOrderSuccess (){
    //console.log("at addpostsuccess");
    return{type: types.REMOVE_MONEY_ORDER_SUCCESS}
};

export function removeMoneyOrderFail (error){
    return{type: types.REMOVE_MONEY_ORDER_FAIL,error}
};