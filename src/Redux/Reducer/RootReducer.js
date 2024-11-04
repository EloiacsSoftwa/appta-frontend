import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import PosReducer from "./PosReducer";
import SubCategoryReducer from './SubCategoryReducer'


const RootReducer = combineReducers({
    LoginReducer : LoginReducer,
    PosReducer   : PosReducer,
    SubCategory : SubCategoryReducer,


})
export default RootReducer;