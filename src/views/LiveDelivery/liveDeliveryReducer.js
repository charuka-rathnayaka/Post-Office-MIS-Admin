import * as liveLocationActionTypes from "./liveDeliveryActionTypes.js";
import produce from "immer";

const initialState = {
  error: "",
  locationData: [],
  locationsRetrieved:false,
  postOffice:{},
  isLoading:false
};

function LiveDeliveryReducer(state = initialState, action) {
  switch (action.type) {
    case liveLocationActionTypes.GET_LOCATIONS_REQUEST:
      return { ...state, error: "", locationsRetrieved:false,isLoading:true};
    case liveLocationActionTypes.GET_LOCATIONS_ERROR:
      return { ...state, error: action.error, locationsRetrieved:false,isLoading:false };
    case liveLocationActionTypes.GET_LOCATIONS_SUCCESS:
      return {...state,locationData:[...action.locationData],postOffice:{...action.postOfficeData.location}, locationsRetrieved:true, error: "",isLoading:false};
    default:
      return state;
  }
}

export default LiveDeliveryReducer;
/*
export default function LiveDeliveryReducer(
    state = initialState,
    action
  ){
    return produce(state, (draft) => {
      switch (action.type) {
        case liveLocationActionTypes.GET_LOCATIONS_REQUEST: {
          draft.error = "";
          draft.locationsRetrieved=false;
          draft.liveLocations=[]
          break;
        }
        case liveLocationActionTypes.GET_LOCATIONS_SUCCESS: {
          draft.error = "";
          console.log("data - ",action.data)
          draft.liveLocations=action.data;
          draft.locationsRetrieved=true;
          console.log("draft  ",draft)
          break;
        }
        case liveLocationActionTypes.GET_LOCATIONS_ERROR: {
            draft.error = "";
            draft.locationsRetrieved=false;
            draft.liveLocations=[]
            break;
          break;
        }
        default:
          break;
      }
    });
  }*/
