
import registrationReducer from '../../../views/Registration/registrationReducer';
import * as actionTypes from '../../../views/Registration/registrationActionTypes';

describe('Login Reducer', () => {

    it('Should return default state', () => {
        const newState = registrationReducer(undefined, {});
        const initialState= {
            error: "",
            isRequested: false,
            requestSuccessful: false,
            requestUnSuccessful: false,
          };
        expect(newState).toEqual(initialState);
    });

    it('Should return state for add employee request', () => {

        const newState = registrationReducer(undefined, {
            type: actionTypes.ADD_EMPLOYEE_REQUEST
        });
        const expectState={
            error: "",
            isRequested: true,
            requestSuccessful: false,
            requestUnSuccessful: false,
          };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for add employee Error', () => {

        const errorMessage="Add employee Error";
        const newState = registrationReducer(undefined, {
            type: actionTypes.ADD_EMPLOYEE_ERROR,
            data:errorMessage
        });
        const expectState= {
            error: errorMessage,
            isRequested: false,
            requestSuccessful: false,
            requestUnSuccessful: true,
          };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for add employee Success', () => {

        const newState = registrationReducer(undefined, {
            type: actionTypes.ADD_EMPLOYEE_SUCCESS,
        });
        const expectState={
            error: "",
            isRequested: false,
            requestSuccessful: true,
            requestUnSuccessful: false,
          };
        expect(newState).toEqual(expectState);

    });


});