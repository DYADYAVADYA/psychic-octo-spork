import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootType} from "../store/store";

export let useTypedSelector:TypedUseSelectorHook<RootType> = useSelector