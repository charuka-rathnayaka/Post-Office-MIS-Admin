
import LiveDeliveryReducer from '../../../views/LiveDelivery/liveDeliveryReducer';
import * as actionTypes from '../../../views/LiveDelivery/liveDeliveryActionTypes';

describe('Login Reducer', () => {

    it('Should return default state', () => {
        const newState = LiveDeliveryReducer(undefined, {});
        const initialState= {
            error: "",
            locationData: [],
            locationsRetrieved:false,
            postOffice:{},
            isLoading:false
          };
        expect(newState).toEqual(initialState);
    });

    it('Should return state for get locations request', () => {

        const newState = LiveDeliveryReducer(undefined, {
            type: actionTypes.GET_LOCATIONS_REQUEST
        });
        const expectState= {
            error: "",
            locationData: [],
            locationsRetrieved:false,
            postOffice:{},
            isLoading:true
          };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for get Location Error', () => {

        const errorMessage="locations Error";
        const newState = LiveDeliveryReducer(undefined, {
            type: actionTypes.GET_LOCATIONS_ERROR,
            error:errorMessage
        });
        const expectState= {
            error: errorMessage,
            locationData: [],
            locationsRetrieved:false,
            postOffice:{},
            isLoading:false
          };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for get Locations Success', () => {

        const data=[{},{}];
        const postOffice={id:"4656",location:{lat:"45"}}
        const newState = LiveDeliveryReducer(undefined, {
            type: actionTypes.GET_LOCATIONS_SUCCESS,
            locationData:data,
            postOfficeData:postOffice
        });
        const expectState= {
            error: "",
            locationData: [{},{}],
            locationsRetrieved:true,
            postOffice:{lat:"45"},
            isLoading:false
          };
        expect(newState).toEqual(expectState);

    });


});