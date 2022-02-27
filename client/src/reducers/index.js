import { combineReducers } from "redux";
import alert from './alert';
import auth from "./auth";
import authadmin from './authadmin';
import authmentor from "./authmentor";

export default combineReducers({
    alert,
    auth,
    authadmin,
    authmentor
});