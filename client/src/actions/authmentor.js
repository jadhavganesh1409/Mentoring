import axios from "axios";
import { setAlert } from "./alert";
import { M_REGISTER_SUCCESS, M_REGISTER_FAIL, MENTOR_LOADED, MENTOR_ERROR, MENTOR_FAIL, MENTOR_SUCCESS , MENTOR_LOGOUT} from "./types";
import setAuthToken from "../utils/setAuthToken";


// Load User

export const loadMentor = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        const res =await axios.get('/api/mentorauth');
        dispatch({
            type: MENTOR_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type:MENTOR_ERROR
        });
    }
}

// Register User

export const mentorregister = ({ first_name, middle_name, last_name, email, current_academic_year, degree, faculty, department, group,des_id,mobile,whatsapp, password}) => async dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({ first_name, middle_name, last_name, email, current_academic_year, degree, faculty, department, group,des_id,mobile,whatsapp, password });

    try {
        const res = await axios.post('/api/mentors', body, config);
       
        dispatch({
            type:M_REGISTER_SUCCESS,
            payload:res.data
        });

       // dispatch(loadMentor());
    } catch (err) {

        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg ,'danger')));
        }
        dispatch({
            type:M_REGISTER_FAIL
        });
    }
}


// Login User

export const mentorlogin = (email, password) => async dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/mentorauth', body, config);
       
        dispatch({
            type:MENTOR_SUCCESS,
            payload:res.data
        });

        dispatch(loadMentor());
    } catch (err) {

        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg ,'danger')));
        }
        dispatch({
            type:MENTOR_FAIL
        });
    }
};


// Logout / Clear Profile

export const mentorlogout = () => dispatch => {
    dispatch({
        type:MENTOR_LOGOUT
    });
};