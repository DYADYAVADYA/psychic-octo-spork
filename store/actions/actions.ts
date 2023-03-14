import {Dispatch} from "redux";
import {ActionTypes, IAction, IUser} from "../../types/types";
import {AxiosResponse} from "axios";

export const loginActionCreator = (username:string,password:string,navigation) =>{
    return async function(dispatch:Dispatch<IAction>){
        dispatch({
            type:ActionTypes.AUTH_LOADING
        })

        if(username !== 'andriy' || password !== 'hrinenko'){
            dispatch({
                type:ActionTypes.AUTH_ERROR,
                data:new Error(username !== 'andriy' ? 'There aren\'t such user' : 'Password is incorrect')
            })
            return
        }
        let response = {
            data:{
                username:'hrinyuk',
                token:'sdlkfjhdkj'
            } as IUser
        } as AxiosResponse

        dispatch({
            type:ActionTypes.AUTH_SUCCESS,
            data:{...response.data,navigation}
        })
    }
}
export let logoutActionCreator = () => {
    return async function(dispatch:Dispatch<IAction>){
        dispatch({
            type:ActionTypes.AUTH_LOGOUT
        })
    }
}