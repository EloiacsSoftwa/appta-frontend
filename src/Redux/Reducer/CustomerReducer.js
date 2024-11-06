const initialState = {
    
    getCustomerStatusCode: 0,
    CustomerList:[],
    addCustomerStatusCode:0,
   };
   
   const CustomerReducer = (state = initialState, action) => {
     switch (action.type) {
         
       case 'GET_CUSTOMER':
         return {...state,CustomerList:action.payload.response, getCustomerStatusCode: action.payload.statusCode};
                      
       case 'REMOVE_GET_CUSTOMER_STATUS_CODE':
        return{...state,  getCustomerStatusCode:0 }
  
  case 'ADD_CUSTOMER':
    return{...state,  addCustomerStatusCode:action.payload.statusCode }
    case 'REMOVE_ADD_CUSTOMER_STATUS_CODE':
    return{...state,  addCustomerStatusCode:0 }
     
       default:
         return state;
     }
   };
   
   export default CustomerReducer;
   