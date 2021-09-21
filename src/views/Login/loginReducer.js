import * as actionTypes from "./loginActionTypes.js";

const initialState = {
  error: "",
  loggedIn: false,
  requireLogin: false,
  idToken: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return { ...state, error: "", loggedIn: false, requireLogin: false };
    case actionTypes.REQUEST_LOGIN_ERROR:
      return { ...state, error: action.error, requireLogin: true };
    case actionTypes.LOGIN_SUCCESS:   
      return { ...state, error: "", loggedIn: true, requireLogin: false };
    case actionTypes.SAVE_ID_TOKEN:
      return { ...state, idToken: action.token };
    default:
      return state;
  }
}

export default reducer;
