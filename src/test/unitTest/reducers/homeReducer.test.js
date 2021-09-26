
import homeReducer from '../../../views/Home/homeReducer';
import * as actionTypes from '../../../views/Home/homeActionTypes';

describe('Home Reducer', () => {

    it('Should return default state', () => {
        const newState = homeReducer(undefined, {});
        const initialState= {
            error: "",
            firstName:"",
            lastName:"",
            contactNumber:"",
            NIC:"",
            role:"",
            idToken: null,
            postOffice:"",
            isAuthorized:false,
            currentUserID:"",
            currentUserEmail:""
          };
        expect(newState).toEqual(initialState);
    });

    it('Should return state for authorization request', () => {

        const newState = homeReducer(undefined, {
            type: actionTypes.AUTHORIZATION_REQUEST
        });
        const expectState= {
            error: "",
            firstName:"",
            lastName:"",
            contactNumber:"",
            NIC:"",
            role:"",
            idToken: null,
            postOffice:"",
            isAuthorized:false,
            currentUserID:"",
            currentUserEmail:""
          };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for Authorization Error', () => {

        const errorMessage="Authorization Error";
        const newState = homeReducer(undefined, {
            type: actionTypes.AUTHORIZATION_ERROR,
            error:errorMessage
        });
       
        const expectState= {
            error: errorMessage,
            firstName:"",
            lastName:"",
            contactNumber:"",
            NIC:"",
            role:"",
            idToken: null,
            postOffice:"",
            isAuthorized:false,
            currentUserID:"",
            currentUserEmail:""
          };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for Authorization Success', () => {

        const data = {
            firstName:"aaa",
            lastName:"bbb",
            contactNumber:"78847896",
            NIC:"557545V",
            role:"Supervisor",
            postOffice:{id:"1001", name:"matara"},
            currentUserID:"fxhxfhxhf",
            currentUserEmail:"aaa.gmail.com"
          };
        const newState = homeReducer(undefined, {
            type: actionTypes.AUTHORIZATION_SUCCESS,
            data:data,
            currentUserID:"fxhxfhxhf",
            currentUserEmail:"aaa.gmail.com"
        });
        const expectState= {
            error: "",
            firstName:"aaa",
            lastName:"bbb",
            contactNumber:"78847896",
            NIC:"557545V",
            role:"Supervisor",
            postOffice:"1001",
            currentUserID:"fxhxfhxhf",
            currentUserEmail:"aaa.gmail.com",
            idToken: null,
            isAuthorized:true,
          };
        expect(newState).toEqual(expectState);

    });

   

});