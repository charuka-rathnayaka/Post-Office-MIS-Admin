import * as actionTypes from "./statisticActionTypes.js";

const initialState = {
  isRequested:false,
  countData:[],
  error:"",
  revenuePieData:[],
  countPieData:[]
};

function statisticsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.COUNT_DATA_REQUEST:
      return { ...state, error: "",  countData:[],isRequested: true};
    case actionTypes.COUNT_DATA_ERROR:
      return { ...state, error: action.error, countData:[],isRequested:false };
    case actionTypes.COUNT_DATA_SUCCESS:
        console.log("redu - ",action.data)
      return { ...state, countData:[...action.countList],revenuePieData:[...action.revenuePieData],countPieData:[...action.countPieData],isRequested: false, error:"" };
    default:
      return state;
  }
}

export default statisticsReducer;
