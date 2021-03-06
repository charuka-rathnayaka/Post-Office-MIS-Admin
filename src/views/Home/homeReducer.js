import * as actionTypes from "./homeActionTypes.js";

const initialState = {
  error: "",
  firstName:"",
  lastName:"",
  contactNumber:"",
  NIC:"",
  role:"",
  idToken: null,
  postOffice:"",
  isAuthorized:false,
  currentUserID:"",
  currentUserEmail:""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTHORIZATION_REQUEST:
      return { ...state, error: "", isAuthorized: false };
    case actionTypes.AUTHORIZATION_ERROR:
      return { ...state, error: action.error, isAuthorized: false };
    case actionTypes.AUTHORIZATION_SUCCESS:
      return { ...state, error: "", isAuthorized: true, firstName:action.data.firstName,lastName:action.data.lastName,contactNumber:action.data.contactNumber,NIC:action.data.NIC,role:action.data.role,postOffice:action.data.postOffice.id,currentUserID:action.currentUserID,currentUserEmail:action.currentUserEmail};
    default:
      return state;
  }
}

export default reducer;
