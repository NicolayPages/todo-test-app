import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import errorsReducer from "./reducers/errors-reducer";
import headerReducer from "./reducers/header-reducer";
import todoReducer from "./reducers/todo-reducer";
import welcomeReducer from "./reducers/welcome-reducer";


let rootReducer = combineReducers({
   header: headerReducer,
   welcome: welcomeReducer,
   todo: todoReducer,
   errors: errorsReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>


type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;