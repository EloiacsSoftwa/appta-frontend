// AddProductReducer
const initialState = {
    category : [],
    subcategory :[],
    statusCode:'',
    add_Product_status_code:''
  };
  
  const AddProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_SUBCATEGORY':
        return {...state, statusCode: action.payload.statusCode,subcategory: action.payload.response };
                     
      case 'ERROR':
       return{...state, statusCode:0 }

       case 'GET_CATEGORY':
        return {...state, statusCode: action.payload.statusCode,category: action.payload.response };
        // ADD_PRODUCT_DETAILS
        case 'ADD_PRODUCT_DETAILS':
            return {...state, add_Product_status_code: action.payload.statusCode};
      
      default:
        return state;
    }
  };
  
  export default AddProductReducer;
  