import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";




const RootReducer = combineReducers({
    LoginReducer : LoginReducer

})
export default RootReducer;