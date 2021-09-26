import * as types from "./recepActionTypes";

const initialState = {
    error:null,   
    postOffice:[],
    post: {},
    dataRetrieved:false,
    isLoading:false,
    isSubmitted:false,
    num:'',
    moneyOrders:[]
    
}

function postOfficeReducer (state=initialState,action){
    console.log("postOfficeReducer");
    switch(action.type){
        
        case types.GET_POSTOFFICE_START:
        case types.GET_MONEYORDERS_START:
            console.log("GET_START");
            return{
                ...state,
                dataRetrieved:false,
                isLoading:true
            };
        
            
        
        case types.GET_POSTOFFICE_SUCCESS:
            console.log("types.GET_POSTOFFICE_SUCCESS")
            return{
                
                ...state,
                postOffice:[...action.postOffice],
                dataRetrieved:true,
                isLoading:false
            };
        
            case types.GET_MONEYORDERS_SUCCESS:
                console.log("types.GET_MONEYORDERS_SUCCESS")
                return{
                    
                    ...state,
                    moneyOrders:[...action.moneyOrders],
                    dataRetrieved:true,
                    isLoading:false
                };
        
        case types.GET_POSTOFFICE_FAIL:
        case types.GET_MONEYORDERS_FAIL:
            return{
                ...state,
                error:action.error,
                dataRetrieved:false,
                isLoading:false
            };
        case types.ADD_POST_START:
        case types.ADD_REG_POST_START:
        case types.ADD_LOGI_POST_START:
        case types.ADD_MONEYORDER_START:
            
            return{
                ...state,
                num:action.num
                
            };
        
            
        case types.ADD_POST_SUCCESS:
        case types.ADD_REG_POST_SUCCESS:
        case types.ADD_LOGI_POST_SUCCESS:
        case types.ADD_MONEYORDER_SUCCESS:
            return{
                ...state,
                
            };
        
        case types.ADD_POST_FAIL:
        case types.ADD_REG_POST_FAIL:
        case types.ADD_LOGI_POST_FAIL:
        case types.ADD_MONEYORDER_FAIL:
        
            return{
                ...state,
                error:action.error,

            };
            
        default:
            return state;
    }
};

export default postOfficeReducer;