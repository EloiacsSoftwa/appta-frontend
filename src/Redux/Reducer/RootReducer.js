import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import PosReducer from "./PosReducer";
import categoryReducer from "./CategoryReducer";
import AddProductReducer from "./AddProductReducer";
import SubCategoryReducer from './SubCategoryReducer'
import CustomerReducer from "./CustomerReducer";
import PurchaseReducer from './PurchaseReducer';
import SupplierReducer from './SupplierReducer';
import UserListReducer from "./UserListReducer";
import DashboardReducer from "../Reducer/DashboardReducer";


const RootReducer = combineReducers({
    LoginReducer : LoginReducer,
    PosReducer   : PosReducer,
    categoryReducer: categoryReducer,
    AddProduct : AddProductReducer,
    SubCategory : SubCategoryReducer,
    Customer : CustomerReducer,
    Purchase : PurchaseReducer,
    Supplier : SupplierReducer,
    UserList :  UserListReducer,
    Dashboard : DashboardReducer

})
export default RootReducer;