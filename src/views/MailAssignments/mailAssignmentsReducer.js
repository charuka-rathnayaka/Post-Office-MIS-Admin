import * as mailAssignmentsActionTypes from "./mailAssignmentsActionTypes";
import produce from "immer";

const initialState = {
  error: "",
  assignments: [],
  postmenData:[],
  isLoading:false,
  dataRetreived:false,
  changedCount:0,
  submitRequested:false,
  submitSuccess:false,
  submitFailure:false
};

function MailAssignmentsReducer(state = initialState, action) {
  switch (action.type) {
    case mailAssignmentsActionTypes.GET_MAILS_REQUEST:
      return { ...state, error: "", dataRetreived:false,isLoading:true,changedCount:0};
    case mailAssignmentsActionTypes. GET_MAILS_ERROR:
      return { ...state, error: action.error, dataRetreived:false,isLoading:false };
    case mailAssignmentsActionTypes. GET_MAILS_SUCCESS:
      return {...state,assignments:[...action.assignments],postmenData:[...action.postmenRoutes], dataRetreived:true, error: "",isLoading:false};
    case mailAssignmentsActionTypes.CHANGE_POSTMAN:
        const objIndex = state.assignments.findIndex((obj => obj.pid == action.pid));
        state.assignments[objIndex].postmanID = action.id;
        return { ...state,changedCount:state.changedCount+1};
    case mailAssignmentsActionTypes.SUBMIT_ASSIGNMENTS_REQUEST:
        return { ...state, submitRequested:true, submitSuccess:false,submitFailure:false};
    case mailAssignmentsActionTypes.SUBMIT_ASSIGNMENTS_ERROR:
        return { ...state,  submitRequested:false, submitSuccess:false,submitFailure:true};
    case mailAssignmentsActionTypes.SUBMIT_ASSIGNMENTS_SUCCESS:
        return {...state, submitRequested:false, submitSuccess:true,submitFailure:false};
    default:
      return state;
  }
}

export default MailAssignmentsReducer;