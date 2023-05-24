import { combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";
import { ToDoReducer } from "./ToDoReducer";

export const rootReducer = combineReducers({
    counterState: CounterReducer,
    todoState: ToDoReducer
})