import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import PosReducer from "./PosReducer";
import categoryReducer from "./CategoryReducer";


const RootReducer = combineReducers({
    LoginReducer : LoginReducer,
    PosReducer   : PosReducer,
    categoryReducer: categoryReducer,

})
export default RootReducer;