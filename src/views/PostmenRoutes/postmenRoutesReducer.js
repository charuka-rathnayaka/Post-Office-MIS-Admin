import * as actionTypes from "./postmenRoutesActionTypes.js";

const initialState = {
  isRequested:false,
  postmenRoutesData:[],
  error:"",
  dataRetrieved:false,
  isSaveRequested:false,
  isSaveSuccess:false,
  saveError:"",
  isRemoveRequested:false,
  isRemoveSuccess:false,
  removeError:"",
  dataChanged:false
};

function postmenRoutesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.POSTMEN_ROUTES_DATA_REQUEST:
      return { ...state, error: "", postmenRoutesData:[],isRequested: true,dataRetrieved:false};
    case actionTypes.POSTMEN_ROUTES_DATA_ERROR:
      return { ...state, error: action.error,postmenRoutesData:[],isRequested:false,dataRetrieved:false};
    case actionTypes.POSTMEN_ROUTES_DATA_SUCCESS:
      return { ...state,postmenRoutesData:[...action.data],isRequested: false, error:"",dataRetrieved:true };
    case actionTypes.POSTMAN_ROUTE_SAVE_REQUEST:
      return { ...state,isSaveRequested: true,isSaveSuccess:false,saveError:""};
    case actionTypes.POSTMAN_ROUTE_SAVE_ERROR:
      return { ...state,isSaveRequested: false,isSaveSuccess:false,saveError:action.data};
    case actionTypes.POSTMAN_ROUTE_SAVE_SUCCESS:
      return { ...state,isSaveRequested: false,isSaveSuccess:true,saveError:"",dataChanged:!state.dataChanged};
    case actionTypes.POSTMAN_ROUTE_REMOVE_REQUEST:
      return { ...state,isRemoveRequested: true,isRemoveSuccess:false,removeError:""};
    case actionTypes.POSTMAN_ROUTE_REMOVE_ERROR:
      return { ...state,isRemoveRequested: false,isRemoveSuccess:false,removeError:action.data};
    case actionTypes.POSTMAN_ROUTE_REMOVE_SUCCESS:
      return { ...state,isRemoveRequested: false,isRemoveSuccess:true,removeError:"",dataChanged:!state.dataChanged};
    default:
      return state;
  }
}

export default postmenRoutesReducer;