import { GET_BRANDS_API_RESPONSE } from "../../utils/Constant";
// AddProductReducer
const initialState = {
    category : [],
    subcategory :[],
    statusCode:'',
    add_Product_status_code:'',
    getSubCategoryStatusCode:0,
    brands: []
  };
  
  const AddProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_SUBCATEGORY':
        return {...state, getSubCategoryStatusCode: action.payload.statusCode,subcategory: action.payload.response };
    case 'ERROR':
       return{...state, statusCode:0 }

    //   case 'GET_CATEGORY':
    // return {
    //     ...state,
    //     statusCode: action.payload ? action.payload.statusCode : null,
    //     category: action.payload ? action.payload.response : []
    // };
        // ADD_PRODUCT_DETAILS
        case 'ADD_PRODUCT_DETAILS':
            return {...state, add_Product_status_code: action.payload.statusCode};

          case GET_BRANDS_API_RESPONSE:
            return {...state, brands: action.payload.response}
      
      default:
        return state;
    }
  };
  
  export default AddProductReducer;
  