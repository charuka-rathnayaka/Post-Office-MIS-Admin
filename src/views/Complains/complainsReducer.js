import * as actionTypes from "./complainsActionTypes.js";

const initialState = {
  isRequested:false,
  complainData:[],
  error:"",
  dataRetrieved:false,
  ismarkRequested:false,
  ismarkSuccess:false,
  markError:""
};

function complainsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.COMPLAINS_DATA_REQUEST:
      return { ...state, error: "", complainData:[],isRequested: true,dataRetrieved:false};
    case actionTypes.COMPLAINS_DATA_ERROR:
      return { ...state, error: action.error, complainData:[],isRequested:false,dataRetrieved:false};
    case actionTypes.COMPLAINS_DATA_SUCCESS:
      return { ...state,complainData:[...action.data],isRequested: false, error:"",dataRetrieved:true };
    case actionTypes.MARK_SOLVED_REQUEST:
      return { ...state,ismarkRequested: true,ismarkSuccess:false,markError:""};
    case actionTypes.MARK_SOLVED_ERROR:
      return { ...state,ismarkRequested: false,ismarkSuccess:false,markError:action.data};
    case actionTypes.MARK_SOLVED_SUCCESS:
      return { ...state,ismarkRequested: false,ismarkSuccess:true,markError:""};
    default:
      return state;
  }
}

export default complainsReducer;