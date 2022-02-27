import axios from "axios";
import { setAlert } from "./alert";
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS , LOGOUT} from "./types";
import setAuthToken from "../utils/setAuthToken";


// Load User

export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        const res =await axios.get('/api/menteeauth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type:AUTH_ERROR
        });
    }
}

// Register User

export const register = ({ first_name, middle_name, last_name, email, current_academic_year, degree, faculty, studying_at,roll_no,division, group,des_id,mobile,whatsapp, password}) => async dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({ first_name, middle_name, last_name, email, current_academic_year, degree, faculty, studying_at,roll_no,division, group,des_id,mobile,whatsapp, password });

    try {
        const res = await axios.post('/api/mentees', body, config);
       
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        });

        //dispatch(loadUser());
    } catch (err) {

        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg ,'danger')));
        }
        dispatch({
            type:REGISTER_FAIL
        });
    }
}


// Login User

export const menteelogin = (email, password) => async dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/menteeauth', body, config);
       
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        });

        dispatch(loadUser());
    } catch (err) {

        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg ,'danger')));
        }
        dispatch({
            type:LOGIN_FAIL
        });
    }
};


// Logout / Clear Profile

export const menteelogout = () => dispatch => {
    dispatch({
        type:LOGOUT
    });
};