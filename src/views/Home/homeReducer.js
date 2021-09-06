import * as actionTypes from "./homeActionTypes.js";

const initialState = {
  error: "",
  firstName:"",
  lastName:"",
  contactNumber:"",
  NIC:"",
  idToken: null,
  isAuthorized:false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTHORIZATION_REQUEST:
      return { ...state, error: "", isAuthorized: false };
    case actionTypes.AUTHORIZATION_ERROR:
      return { ...state, error: action.error, isAuthorized: false };
    case actionTypes.AUTHORIZATION_SUCCESS:
        console.log("success called")
      return { ...state, error: "", isAuthorized: true, firstName:action.data.firstName,lastName:action.data.lastName,contactNumber:action.data.contactNumber,NIC:action.data.NIC };
    default:
      return state;
  }
}

export default reducer;
