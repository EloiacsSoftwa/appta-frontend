const initialState = {
    
   addSubCategoryStatusCode: 0,
   
  };
  
  const SubCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        
      case 'ADD_SUB_CATEGORY':
        return {...state,   addSubCategoryStatusCode: action.payload.statusCode};
                     
      case 'REMOVE_ADD_SUB_CATEGORY_STATUS_CODE':
       return{...state, addSubCategoryStatusCode:0 }
 
 
    
      default:
        return state;
    }
  };
  
  export default SubCategoryReducer;
  