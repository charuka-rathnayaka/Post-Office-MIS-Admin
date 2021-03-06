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
      return { ...state, error: "", isRequested: true, requestSuccessful: false,error:"",requestUnSuccessful: false};
    case actionTypes.ADD_EMPLOYEE_SUCCESS:
      return { ...state, isRequested: false, requestSuccessful: true,error:"",requestUnSuccessful: false };
    case actionTypes.ADD_EMPLOYEE_ERROR:  
      return { ...state, isRequested: false, requestSuccessful: false ,error:action.data,requestUnSuccessful: true};
    default:
      return state;
  }
}

export default registrationReducer;
