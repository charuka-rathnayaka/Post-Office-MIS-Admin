import * as actionTypes from "./dashboardActionTypes.js";

const initialState = {
  isRequested:false,
  revenueData:[],
  error:""
};

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.PERFORMANCE_DATA_REQUEST:
      return { ...state, error: "",  data:[],isRequested: true};
    case actionTypes.PERFORMANCE_DATA_ERROR:
      return { ...state, error: action.error, data:[],isRequested:false };
    case actionTypes.PERFORMANCE_DATA_SUCCESS:
        //console.log("redu - ",action.data)
      return { ...state, revenueData:[...action.data],isRequested: false, error:"" };
    default:
      return state;
  }
}

export default dashboardReducer;
