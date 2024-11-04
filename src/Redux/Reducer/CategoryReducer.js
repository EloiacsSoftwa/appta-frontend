const initialState = {
    Category: [],
    AddCategoryStatuscode: 0,
    GetCategoryStatusCode:0,
  };
  
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        
      case 'ADD-CATEGORY':
        return {...state,  CategoryStatuscode: action.payload.statusCode};
                     
      case 'REMOVE_ADD_CATEGORY_STATUS_CODE':
       return{...state, CategoryStatuscode:0 }

       case 'GET-CATEGORY':
        return {...state, Category :action.payload.data ,  GetCategoryStatusCode: action.payload.statusCode};
                     
      case 'REMOVE_GET_CATEGORY_STATUS_CODE':
       return{...state, GetCategoryStatusCode:0 }
 
      default: 
      return state;
    }
  };
  
  export default categoryReducer;
  