import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import AddProductReducer from "./AddProductReducer";




const RootReducer = combineReducers({
    LoginReducer : LoginReducer,
    AddProduct : AddProductReducer

})
export default RootReducer;