import {Ref} from "react";
import {Animated, KeyboardType, KeyboardTypeIOS} from "react-native";
import ValueXY = Animated.ValueXY;
import Value = Animated.Value;

export enum Routes{
    LOGIN = "LOGIN",
    CREATIONACCOUNT = "CREATIONACCOUNT",
    HOME = "HOME"
}
export enum DrawerRoutes{
    TIMETABLE = "TIMETABLE",
    SCHEDULE = "SCHEDULE",
    SUCCESS = "SUCCESS"
}
export interface IInputItem{
    placeholder:string,
    iconName:string,
    shakeAnim:Value,
    transformValue:ValueXY,
    boxShadowAnim:Value,
    state?:Array<any>
    type:KeyboardType,
    security?:Array<any>,
}
export interface IUser{
    username:string,
    token:string,
    email?:string,
    password?:string,
    fullName?:string,
    phone?:string
}
export enum LoadingStatuses{
    LOADING,
    ERROR
}
export interface IState{
    navigation?:any,
    users:IUser[]
    user:IUser|null,
    status?:LoadingStatuses,
    error:Error|null
}
export enum ActionTypes{
    AUTH_LOADING = "AUTH_LOADING",
    AUTH_ERROR = "AUTH_ERROR",
    AUTH_SUCCESS = "AUTH_SUCCESS",
    AUTH_LOGOUT = "AUTH_LOGOUT",
    REGISTRATION = "REGISTRATION"
}

export interface IAction{
    data?:any,
    type:ActionTypes,
}
export interface ICreationAccountData{
    name:string,
    email:string,
    phone:string,
    password:string,
    confirmPassword:string,

}