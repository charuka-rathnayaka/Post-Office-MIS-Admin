//import { types } from './../../actions/types';
import statisticsReducer from '../../../views/Statistics/statisticsReducer';
import * as actionTypes from '../../../views/Statistics/statisticActionTypes';

describe('Statistics Reducer', () => {

    it('Should return default state', () => {
        const newState = statisticsReducer(undefined, {});
        const initialState= {
            isRequested:false,
            countData:[],
            error:"",
            revenuePieData:[],
            countPieData:[]
          };
        expect(newState).toEqual(initialState);
    });

    it('Should return state for data request', () => {

        const newState = statisticsReducer(undefined, {
            type: actionTypes.COUNT_DATA_REQUEST
        });
        const expectState={
            isRequested:true,
            countData:[],
            error:"",
            revenuePieData:[],
            countPieData:[]
          };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for get data Error', () => {

        const errorMessage="Add employee Error";
        const newState = statisticsReducer(undefined, {
            type: actionTypes.COUNT_DATA_ERROR,
            error:errorMessage
        });
        const expectState= {
            isRequested:false,
            countData:[],
            error:errorMessage,
            revenuePieData:[],
            countPieData:[]
          };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for get data Success', () => {

        const countList=[{},{}]
        const revenuePieData=[{},{}]
        const countPieData=[{},{}]
        const newState =statisticsReducer(undefined, {
            type: actionTypes.COUNT_DATA_SUCCESS,
            countList:countList,
            revenuePieData:revenuePieData,
            countPieData:countPieData
        });
        const expectState={
            isRequested:false,
            countData:countList,
            error:"",
            revenuePieData:revenuePieData,
            countPieData:countPieData
          };
        expect(newState).toEqual(expectState);

    });


});