import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import PosReducer from "./PosReducer";
import AddProductReducer from "./AddProductReducer";



const RootReducer = combineReducers({
    LoginReducer : LoginReducer,
    PosReducer   : PosReducer,
    AddProduct : AddProductReducer


})
export default RootReducer;