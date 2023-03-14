import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as ActionCreatos from '../store/actions/actions'
export let useActions = () =>{
    let dispatch = useDispatch()
    return bindActionCreators(ActionCreatos,dispatch)
}