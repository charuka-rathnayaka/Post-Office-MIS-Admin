import * as actionTypes from "./registrationActionTypes.js";

const initialState = {
  error: "",
  isRequested: false,
  requestSuccessful: false,
  requestUnSuccessful: false,
};

function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_EMPLOYEE_REQUEST:
      console.log("req.....")
      return { ...state, error: "", isRequested: true, requestSuccessful: false,error:"",requestUnSuccessful: false};
    case actionTypes.ADD_EMPLOYEE_SUCCESS:
      console.log("Suc.....")
      return { ...state, isRequested: false, requestSuccessful: true,error:"",requestUnSuccessful: false };
    case actionTypes.ADD_EMPLOYEE_ERROR: 
      console.log("err.....")  
      return { ...state, isRequested: false, requestSuccessful: false ,error:action.data,requestUnSuccessful: true};
    default:
      return state;
  }
}

export default registrationReducer;
