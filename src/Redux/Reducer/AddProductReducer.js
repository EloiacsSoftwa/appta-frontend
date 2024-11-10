import { Size } from "iconsax-react";
import { GET_BRANDS_API_RESPONSE, GET_ALL_UNITS_API_RESPONSE, GET_PRODUCT_SIZE_API_RESPONSE } from "../../utils/Constant";
// AddProductReducer
const initialState = {
  category: [],
  subcategory: [],
  statusCode: '',
  add_Product_status_code: '',
  getSubCategoryStatusCode: 0,
  getCategoryStatusCode: 0,
  brands: [],
  getBrandStatusCode: 0,
  AddBrandSuccessStatusCode: 0,
  ProductList: [],
  getProductStatusCode: 0,
  units: [],
  getFreebieName :[],
  getFreebieStatusCode :0,
  // Get product by name
  ProductByName: [],
  getProductByNameStatusCode: 0,
  productSize: []
};

const AddProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SUBCATEGORY':
      return { ...state, getSubCategoryStatusCode: action.payload.statusCode, subcategory: action.payload.response };
    case 'REMOVE_GET_SUBCATEGORY_STATUS_CODE':
      return { ...state, getSubCategoryStatusCode: 0 }

    case 'GET_CATEGORY':
      return {
        ...state,
        getCategoryStatusCode: action.payload ? action.payload.statusCode : null,
        category: action.payload ? action.payload.response : []
      };

    case 'REMOVE_GET_CATEGORY_STATUS_CODE':
      return { ...state, getCategoryStatusCode: 0 }

    case 'ADD_PRODUCT_DETAILS':             
      return { ...state, add_Product_status_code: action.payload.statusCode };   
      
      case 'REMOVE_ADD_PRODUCT_STATUS_CODE':             
      return { ...state, add_Product_status_code: 0 };   

      // case 'ADD_PRODUCT_VALIDATION':             
      // return { ...state, add_Product_status_code: action.payload.statusCode };

    case GET_BRANDS_API_RESPONSE:
      return { ...state, brands: action.payload.response, getBrandStatusCode: action.payload.statusCode }

    case 'REMOVE_GET_BRAND_STATUSCODE':
      return { ...state, getBrandStatusCode: 0 }

    case 'ADD_BRAND':
      return { ...state, AddBrandSuccessStatusCode: action.payload.statusCode }
    case 'REMOVE_ADD_BRAND_STATUS_CODE':
      return { ...state, AddBrandSuccessStatusCode: 0 }
    case 'GET_PRODUCT':
      return { ...state, ProductList: action.payload.response, getProductStatusCode: action.payload.statusCode }
    case 'REMOVE_GET_PRODUCT_STATUS_CODE':
      return { ...state, getProductStatusCode: 0 }

    case GET_ALL_UNITS_API_RESPONSE: {
      return {...state, units: action.payload}
    }
    // GET_FREEBIE_NAME
    case 'GET_FREEBIE_NAME':
        return { ...state, getFreebieStatusCode: action.payload.statusCode, getFreebieName: action.payload.response };
      
      // Get product by name
    case 'GET_PRODUCT_DETAILS_BY_ID':
      return { ...state, ProductByName: action.payload.response, getProductByNameStatusCode: action.payload.statusCode }
    
    case GET_PRODUCT_SIZE_API_RESPONSE:
      return {...state, productSize: action.payload}

    default:
      return state;
  }
};

export default AddProductReducer;
