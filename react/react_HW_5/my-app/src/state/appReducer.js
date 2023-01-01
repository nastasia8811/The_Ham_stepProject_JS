import {combineReducers} from "redux";
import {reducer as modalReducers} from "./modal/modalReducers"
import { reducer as productReducer } from "./products/productReducer";


export const appReducer = combineReducers({
    items: productReducer,
    modals: modalReducers,
});
