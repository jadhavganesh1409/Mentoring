import axios from "axios";
import { setAlert } from "./alert";
import { A_REGISTER_SUCCESS, A_REGISTER_FAIL, ADMIN_LOADED, ADMIN_ERROR, ADMIN_FAIL, ADMIN_SUCCESS , ADMIN_LOGOUT} from "./types";
import setAuthToken from "../utils/setAuthToken";


// Load User

export const loadAdmin = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        const res =await axios.get('/api/adminauth');
        dispatch({
            type: ADMIN_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type:ADMIN_ERROR
        });
    }
}

// Register User

export const adminregister = ({ first_name, middle_name, last_name, email,des_id,mobile, password}) => async dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({ first_name, middle_name, last_name, email, des_id,mobile, password });

    try {
        const res = await axios.post('/api/admins', body, config);
       
        dispatch({
            type:A_REGISTER_SUCCESS,
            payload:res.data
        });
        dispatch(setAlert('Added Successfully','success'));
        dispatch(loadAdmin());
    } catch (err) {

        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg ,'danger')));
        }
        dispatch({
            type:A_REGISTER_FAIL
        });
    }
}


// Login User

export const adminlogin = (email, password) => async dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/adminauth', body, config);
       
        dispatch({
            type:ADMIN_SUCCESS,
            payload:res.data
        });

        dispatch(loadAdmin());
    } catch (err) {

        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg ,'danger')));
        }
        dispatch({
            type:ADMIN_FAIL
        });
    }
};


// Logout / Clear Profile

export const adminlogout = () => dispatch => {
    dispatch({
        type:ADMIN_LOGOUT
    });
};