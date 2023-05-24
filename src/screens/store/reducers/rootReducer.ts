import { combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";
import { ToDoReducer } from "./ToDoReducer";
import { ProductReducer } from "./ProductReducer";

export const rootReducer = combineReducers({
    counterState: CounterReducer,
    todoState: ToDoReducer,
    productState: ProductReducer
})