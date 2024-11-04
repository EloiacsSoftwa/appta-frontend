// AddProductReducer
const initialState = {
    category : [],
    subcategory :[],
    statusCode:'',
    add_Product_status_code:'',
    getSubCategoryStatusCode:0,
    getCategoryStatusCode:0
  };
  
  const AddProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_SUBCATEGORY':
        return {...state, getSubCategoryStatusCode: action.payload.statusCode,subcategory: action.payload.response };
    case 'ERROR':
       return{...state, statusCode:0 }

      case 'GET_CATEGORY':
    return {
        ...state,
        getCategoryStatusCode: action.payload ? action.payload.statusCode : null,
        category: action.payload ? action.payload.response : []
    };
        // ADD_PRODUCT_DETAILS
        case 'ADD_PRODUCT_DETAILS':
            return {...state, add_Product_status_code: action.payload.statusCode};
      
      default:
        return state;
    }
  };
  
  export default AddProductReducer;
  