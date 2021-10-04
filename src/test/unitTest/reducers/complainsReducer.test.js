
import complainsReducer from '../../../views/Complains/complainsReducer';
import * as actionTypes from '../../../views/Complains/complainsActionTypes';

describe('Complains Reducer', () => {

    it('Should return default state', () => {
        const newState = complainsReducer(undefined, {});
        const initialState= {isRequested:false,complainData:[],error:"",dataRetrieved:false,ismarkRequested:false,ismarkSuccess:false,markError:""};
        expect(newState).toEqual(initialState);
    });

    it('Should return state for Complains request', () => {

        const newState = complainsReducer(undefined, {
            type: actionTypes.COMPLAINS_DATA_REQUEST
        });
        const expectState= {isRequested:true,complainData:[],error:"",dataRetrieved:false,ismarkRequested:false,ismarkSuccess:false,markError:""};
        expect(newState).toEqual(expectState);

    });

    it('Should return state for Complains Error', () => {

        const errorMessage="Complains Error";
        const newState = complainsReducer(undefined, {
            type: actionTypes.COMPLAINS_DATA_ERROR,
            error:errorMessage
        });
        const expectState= {isRequested:false,complainData:[],error:errorMessage,dataRetrieved:false,ismarkRequested:false,ismarkSuccess:false,markError:""};
        expect(newState).toEqual(expectState);

    });

    it('Should return state for Complains Success', () => {
        const data = [{name:"a",pid:"543345"},{name:"a",pid:"543345"}]
        const newState = complainsReducer(undefined, {
            type: actionTypes.COMPLAINS_DATA_SUCCESS,
            data: data
        });
        const expectState= {isRequested:false,complainData:data,error:"",dataRetrieved:true,ismarkRequested:false,ismarkSuccess:false,markError:""};
        expect(newState).toEqual(expectState);

    });

    it('Should return state for Complain Solved request', () => {
       
        const newState = complainsReducer(undefined, {
            type: actionTypes.MARK_SOLVED_REQUEST,
        });
        const expectState= {isRequested:false,complainData:[],error:"",dataRetrieved:false,ismarkRequested:true,ismarkSuccess:false,markError:""};
        expect(newState).toEqual(expectState);

    });

    it('Should return state for Complain Solved Error', () => {
        const errorMessage = "Error Marking Solved";
        const newState = complainsReducer(undefined, {
            type: actionTypes.MARK_SOLVED_ERROR,
            data:errorMessage
        });
        const expectState= {isRequested:false,complainData:[],error:"",dataRetrieved:false,ismarkRequested:false,ismarkSuccess:false,markError:errorMessage};
        expect(newState).toEqual(expectState);
    });

    it('Should return state for Complain Solved Success', () => {
       
        const newState = complainsReducer(undefined, {
            type: actionTypes.MARK_SOLVED_SUCCESS,
        });
        const expectState= {isRequested:false,complainData:[],error:"",dataRetrieved:false,ismarkRequested:false,ismarkSuccess:true,markError:""};
        expect(newState).toEqual(expectState);

    });

    

});