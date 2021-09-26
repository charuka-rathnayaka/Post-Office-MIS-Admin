
import dashboardReducer from '../../../views/Home/Dashboard/dashboardReducer';
import * as actionTypes from '../../../views/Home/Dashboard/dashboardActionTypes';

describe('Dashboard Reducer', () => {

    it('Should return default state', () => {
        const newState = dashboardReducer(undefined, {});
        const initialState= {
                isRequested:false,
                revenueData:[],
                error:"",
                dataRetreived:false
              };

        expect(newState).toEqual(initialState);
    });

    it('Should return state for data request', () => {

        const newState = dashboardReducer(undefined, {
            type: actionTypes.PERFORMANCE_DATA_REQUEST
        });
        const expectState= {
            isRequested:true,
            revenueData:[],
            error:"",
            dataRetreived:false
          };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for data request Error', () => {

        const errorMessage="Data request Error";
        const newState = dashboardReducer(undefined, {
            type: actionTypes.PERFORMANCE_DATA_ERROR,
            error:errorMessage
        });
       
        const expectState= {
            isRequested:false,
            revenueData:[],
            error:errorMessage,
            dataRetreived:false
          };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for Data retrieve Success', () => {

        const data = [{mail:"50"},{moneyOrder:"20"}]
        const newState = dashboardReducer(undefined, {
            type: actionTypes.PERFORMANCE_DATA_SUCCESS,
            data:data,
        });
        const expectState= {
            isRequested:false,
            revenueData:data,
            error:"",
            dataRetreived:true
          };
        expect(newState).toEqual(expectState);

    });

   

});