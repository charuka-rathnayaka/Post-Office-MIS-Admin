import * as types from "./recepActionTypes";

const initialState = {
    error:null,   
    postOffice:[],
    post: {},
    dataRetrieved:false,
    isLoading:false,
    isSubmitted:false
    
}

function postOfficeReducer (state=initialState,action){
    console.log("postOfficeReducer");
    switch(action.type){
        
        case types.GET_POSTOFFICE_START:
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
        
        case types.GET_POSTOFFICE_FAIL:
            return{
                ...state,
                error:action.error,
                dataRetrieved:false,
                isLoading:false
            };
        case types.ADD_POST_START:
            
            return{
                ...state,
                
                
            };
        
            
        case types.ADD_POST_SUCCESS:
            return{
                ...state,
                
            };
        
        case types.ADD_POST_FAIL:
        
            return{
                ...state,
                error:action.error,

            };
            
        default:
            return state;
    }
};

export default postOfficeReducer;