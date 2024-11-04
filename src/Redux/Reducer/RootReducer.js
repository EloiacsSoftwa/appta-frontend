import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import PosReducer from "./PosReducer";
import categoryReducer from "./CategoryReducer";
import AddProductReducer from "./AddProductReducer";
import SubCategoryReducer from './SubCategoryReducer'



const RootReducer = combineReducers({
    LoginReducer : LoginReducer,
    PosReducer   : PosReducer,
    categoryReducer: categoryReducer,
    AddProduct : AddProductReducer,
    SubCategory : SubCategoryReducer,



})
export default RootReducer;