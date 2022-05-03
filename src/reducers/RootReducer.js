import { combineReducers } from "redux";
import BusinessListReducer from "./BusinessListReducer";

const RootReducer = combineReducers({
  BusinessList: BusinessListReducer,
});

export default RootReducer;
