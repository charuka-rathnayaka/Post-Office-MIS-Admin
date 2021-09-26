
import loginReducer from '../../../views/Login/loginReducer';
import * as actionTypes from '../../../views/Login/loginActionTypes';

describe('Login Reducer', () => {

    it('Should return default state', () => {
        const newState = loginReducer(undefined, {});
        const initialState= { error: "",loggedIn: false,requireLogin: false,idToken: null};
        expect(newState).toEqual(initialState);
    });

    it('Should return state for Login request', () => {

        const newState = loginReducer(undefined, {
            type: actionTypes.LOGIN_REQUEST
        });
        const expectState= { error: "",loggedIn: false,requireLogin: false,idToken: null};
        expect(newState).toEqual(expectState);

    });

    it('Should return state for Login Error', () => {

        const errorMessage="Auth Error";
        const newState = loginReducer(undefined, {
            type: actionTypes.LOGIN_ERROR,
            error:errorMessage
        });
        const expectState= { error: errorMessage,loggedIn: false, requireLogin: true ,idToken: null};
        expect(newState).toEqual(expectState);

    });

    it('Should return state for Login Success', () => {

        const newState = loginReducer(undefined, {
            type: actionTypes.LOGIN_SUCCESS
        });
        const expectState= { error: "",loggedIn: true, requireLogin: false ,idToken: null};
        expect(newState).toEqual(expectState);

    });

    it('Should return state for Saving ID token', () => {

        const newState = loginReducer(undefined, {
            type: actionTypes.SAVE_ID_TOKEN,
            token:"tokenID"
        });
        const expectState= { error: "",loggedIn: false, requireLogin: false ,idToken: "tokenID"};
        expect(newState).toEqual(expectState);

    });

});