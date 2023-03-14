import {ActionTypes, IAction, IState, LoadingStatuses, Routes} from "../../types/types";

let initialState:IState = {
    user: null,
    error:null,
    users:[]
}
export let reducer = (state = initialState,action:IAction):IState =>{
    switch (action.type){
        case ActionTypes.AUTH_SUCCESS:
            // localStorage.setItem('username',action.data.username)
            // localStorage.setItem('token',action.data.token)
            action.data.navigation.navigate(Routes.HOME)
            return {...state,user:action.data}
        case ActionTypes.AUTH_ERROR:
            return {...state,error:action.data.message,status:LoadingStatuses.ERROR}
        case ActionTypes.AUTH_LOGOUT:
            return {...state,user:null}
        case ActionTypes.AUTH_LOADING:
            return {...state,status:LoadingStatuses.LOADING}
        case ActionTypes.REGISTRATION:
            return {...state,users:state.users.concat(action.data)}
        default:
            return state
    }
}