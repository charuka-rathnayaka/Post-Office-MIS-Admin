import * as mailTransfersActionTypes from "./mailTransfersActionTypes";

const initialState = {
  error: "",
  transfers: [],
  isLoading:false,
  dataRetreived:false,
  submitRequested:false,
  submitSuccess:false,
  submitFailure:false
};

function MailTransfersReducer(state = initialState, action) {
  switch (action.type) {
    case  mailTransfersActionTypes.GET_TRANSFERS_REQUEST:
      return { ...state, error: "", dataRetreived:false,isLoading:true};
    case  mailTransfersActionTypes.GET_TRANSFERS_ERROR:
      return { ...state, error: action.error, dataRetreived:false,isLoading:false };
    case  mailTransfersActionTypes. GET_TRANSFERS_SUCCESS:
      return {...state,transfers:[...action.transfers], dataRetreived:true, error: "",isLoading:false};
    
    default:
      return state;
  }
}

export default MailTransfersReducer;