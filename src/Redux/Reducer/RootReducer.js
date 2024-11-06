import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import PosReducer from "./PosReducer";
import categoryReducer from "./CategoryReducer";
import AddProductReducer from "./AddProductReducer";
import SubCategoryReducer from './SubCategoryReducer'
import CustomerReducer from "./CustomerReducer";



const RootReducer = combineReducers({
    LoginReducer : LoginReducer,
    PosReducer   : PosReducer,
    categoryReducer: categoryReducer,
    AddProduct : AddProductReducer,
    SubCategory : SubCategoryReducer,
    Customer : CustomerReducer,


})
export default RootReducer;