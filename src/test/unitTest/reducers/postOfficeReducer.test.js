import postOfficeReducer from '../../../views/RecepFunc/postOfficeReducer';
import * as actionTypes from '../../../views/RecepFunc/recepActionTypes';

describe('Post Office Reducer', () => {

    it('Should return default state', () => {
        const newState = postOfficeReducer(undefined, {});
        const initialState= {
            error:null,   
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
          };
        expect(newState).toEqual(initialState);
    });

    it('Should return state for get postOffice start', () => {

        const newState = postOfficeReducer(undefined, {
            type: actionTypes.GET_POSTOFFICE_START
        });
        const expectState={
            error:null,   
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:true,
            moneyOrders:[],
            postOfficeID:''
            
            
        };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for get postoffice success', () => {

        const data=[{title:"test 1"},{title:"test 2"},{title:"test 2"}];
        const newState = postOfficeReducer(undefined, {
            type: actionTypes.GET_POSTOFFICE_SUCCESS,
            postOffice:data,
        });
        const expectState= {
            error:null,   
            postOffice:data,
            post: {},
            dataRetrieved:true,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
        };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for get postoffice error', () => {

        const errorMsg="Error at getting postoffice"
        const newState = postOfficeReducer(undefined, {
            type: actionTypes.GET_POSTOFFICE_FAIL,
            error:errorMsg
        });
        const expectState= {
            error: errorMsg,
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
        };
        expect(newState).toEqual(expectState);

     });

     it('Should return state for get money orders start', () => {

        const newState = postOfficeReducer(undefined, {
            type: actionTypes.GET_MONEYORDERS_START
        });
        const expectState={
            error:null,   
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:true,
            moneyOrders:[],
            postOfficeID:''
            
            
        };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for get money orders success', () => {

        const data=[{title:"test 1"},{title:"test 2"},{title:"test 3"}];
        const newState = postOfficeReducer(undefined, {
            type: actionTypes.GET_MONEYORDERS_SUCCESS,
            moneyOrders:data,
        });
        const expectState= {
            error:null,   
            postOffice:[],
            post: {},
            dataRetrieved:true,
            isLoading:false,
            moneyOrders:data,
            postOfficeID:''
        };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for get money orders error', () => {

        const errorMsg="Error at getting money orders"
        const newState = postOfficeReducer(undefined, {
            type: actionTypes.GET_MONEYORDERS_FAIL,
            error:errorMsg
        });
        const expectState= {
            error: errorMsg,
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
        };
        expect(newState).toEqual(expectState);

     });

     it('Should return state for add normal post start', () => {

        const newState = postOfficeReducer(undefined, {
            type: actionTypes.ADD_POST_START
        });
        const expectState={
            error:null,   
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
            
            
        };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for add normal post success', () => {

        
        const newState = postOfficeReducer(undefined, {
            type: actionTypes.ADD_POST_SUCCESS
        });
        const expectState= {
            error:null,   
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
        };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for add normal post error', () => {

        const errorMsg="Error at adding normal posts"
        const newState = postOfficeReducer(undefined, {
            type: actionTypes.ADD_POST_FAIL,
            error:errorMsg
        });
        const expectState= {
            error: errorMsg,
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
        };
        expect(newState).toEqual(expectState);

     });
     it('Should return state for add registered post start', () => {

        const newState = postOfficeReducer(undefined, {
            type: actionTypes.ADD_REG_POST_START
    
        });
        const expectState={
            error:null,   
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
            
            
        };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for add registered post success', () => {

        
        const newState = postOfficeReducer(undefined, {
            type: actionTypes.ADD_REG_POST_SUCCESS
        });
        const expectState= {
            error:null,   
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
        };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for add registered post error', () => {

        const errorMsg="Error at adding regitered posts"
        const newState = postOfficeReducer(undefined, {
            type: actionTypes.ADD_REG_POST_FAIL,
            error:errorMsg
        });
        const expectState= {
            error: errorMsg,
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
        };
        expect(newState).toEqual(expectState);

     });
     it('Should return state for add logi post start', () => {

        const newState = postOfficeReducer(undefined, {
            type: actionTypes.ADD_LOGI_POST_START
        });
        const expectState={
            error:null,   
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
            
            
        };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for add logi post success', () => {

        
        const newState = postOfficeReducer(undefined, {
            type: actionTypes.ADD_LOGI_POST_SUCCESS
        });
        const expectState= {
            error:null,   
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
        };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for add logi post error', () => {

        const errorMsg="Error at adding logi posts"
        const newState = postOfficeReducer(undefined, {
            type: actionTypes.ADD_LOGI_POST_FAIL,
            error:errorMsg
        });
        const expectState= {
            error: errorMsg,
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
        };
        expect(newState).toEqual(expectState);

     });

     it('Should return state for add money order start', () => {

        const newState = postOfficeReducer(undefined, {
            type: actionTypes.ADD_MONEYORDER_START
        });
        const expectState={
            error:null,   
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
            
            
        };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for add money order success', () => {

        
        const newState = postOfficeReducer(undefined, {
            type: actionTypes.ADD_MONEYORDER_SUCCESS
        });
        const expectState= {
            error:null,   
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
        };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for add money order error', () => {

        const errorMsg="Error at adding money order"
        const newState = postOfficeReducer(undefined, {
            type: actionTypes.ADD_MONEYORDER_FAIL,
            error:errorMsg
        });
        const expectState= {
            error: errorMsg,
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
        };
        expect(newState).toEqual(expectState);

     });
     it('Should return state for remove money order state', () => {
        const id='jAds353748ngk7'
        const newState = postOfficeReducer(undefined, {
            type: actionTypes.REMOVE_MONEY_ORDER_START,
            id:id
        });
        const expectState={
            error:null,   
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:'',
            id:id
            
        };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for remove money order success', () => {

        
        const newState = postOfficeReducer(undefined, {
            type: actionTypes.REMOVE_MONEY_ORDER_SUCCESS,
            
        });
        const expectState= {
            error:null,   
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:'',
            
        };
        expect(newState).toEqual(expectState);

    });

    it('Should return state for remove money order error', () => {

        const errorMsg="Error at removing money order"
        const newState = postOfficeReducer(undefined, {
            type: actionTypes.REMOVE_MONEY_ORDER_FAIL,
            error:errorMsg
        });
        const expectState= {
            error: errorMsg,
            postOffice:[],
            post: {},
            dataRetrieved:false,
            isLoading:false,
            moneyOrders:[],
            postOfficeID:''
        };
        expect(newState).toEqual(expectState);

     });

});