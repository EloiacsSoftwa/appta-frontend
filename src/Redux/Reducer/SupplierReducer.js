const initialState = {
    
    getSupplierStatusCode: 0,
    SupplierList:[],
    addSupplierStatusCode:0,
   };
   
   const SupplierReducer = (state = initialState, action) => {
     switch (action.type) {
         
       case 'GET_SUPPLIER':
         return {...state,SupplierList:action.payload.response, getSupplierStatusCode: action.payload.statusCode};
                      
       case 'REMOVE_GET_SUPPLIER_STATUS_CODE':
        return{...state,  getSupplierStatusCode:0 }
  
  case 'ADD_SUPPLIER':
    return{...state,  addSupplierStatusCode:action.payload.statusCode }
    case 'REMOVE_ADD_SUPPLIER_STATUS_CODE':
    return{...state,  addSupplierStatusCode:0 }
     
       default:
         return state;
     }
   };
   
   export default SupplierReducer;
   