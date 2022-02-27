import { M_REGISTER_SUCCESS, M_REGISTER_FAIL, MENTOR_LOADED, MENTOR_ERROR , MENTOR_SUCCESS, MENTOR_FAIL, MENTOR_LOGOUT } from "../actions/types";

const initialState ={
    token:localStorage.getItem('token'),
    isAuthenticatedMentor: null,
    loading:true,
    mentor:null
}

export default function(state= initialState,action)  {
    const { type, payload } = action;
    switch (type) {
        case MENTOR_LOADED:
            return{
                ...state,
                isAuthenticatedMentor:true,
                loading:false,
                mentor:payload
            };
        case M_REGISTER_SUCCESS:
        case MENTOR_SUCCESS:
            localStorage.setItem('token',payload.token);
            return{
                ...state,
                ...payload,
                isAuthenticatedMentor:true,
                loading:false
            };
    
        case M_REGISTER_FAIL:
        case MENTOR_FAIL:
        case MENTOR_ERROR:
        case MENTOR_LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                isAuthenticatedMentor: false,
                loading:false,
                mentor:null
            };
        default:
            return state;
    }
}