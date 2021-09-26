import * as actionTypes from "./dashboardActionTypes.js";

const initialState = {
  isRequested:false,
  revenueData:[],
  error:"",
  dataRetreived:false
};

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.PERFORMANCE_DATA_REQUEST:
      return { ...state, error: "",  revenueData:[],isRequested: true, dataRetreived:false};
    case actionTypes.PERFORMANCE_DATA_ERROR:
      return { ...state, error: action.error, revenueData:[],isRequested:false, dataRetreived:false };
    case actionTypes.PERFORMANCE_DATA_SUCCESS:
      return { ...state, revenueData:[...action.data],isRequested: false, error:"", dataRetreived:true};
    default:
      return state;
  }
}

export default dashboardReducer;
