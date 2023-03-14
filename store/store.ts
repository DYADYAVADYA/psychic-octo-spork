import {createStore, combineReducers, applyMiddleware} from 'redux'
import {reducer} from "./reducers/reducer";
import thunk from "redux-thunk";
let mainReducer = combineReducers({
    reducer
})
export let store = createStore(mainReducer,applyMiddleware(thunk))
export type RootType = ReturnType<typeof mainReducer>