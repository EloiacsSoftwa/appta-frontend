import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import PosReducer from "./PosReducer";



const RootReducer = combineReducers({
    LoginReducer : LoginReducer,
    PosReducer   : PosReducer


})
export default RootReducer;