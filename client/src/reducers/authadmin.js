import { A_REGISTER_SUCCESS, A_REGISTER_FAIL, ADMIN_LOADED, ADMIN_ERROR , ADMIN_SUCCESS, ADMIN_FAIL, ADMIN_LOGOUT } from "../actions/types";

const initialState ={
    token:localStorage.getItem('token'),
    isAuthenticatedAdmin: null,
    loading:true,
    admin:null
}

export default function(state= initialState,action)  {
    const { type, payload } = action;
    switch (type) {
        case ADMIN_LOADED:
            return{
                ...state,
                isAuthenticatedAdmin:true,
                loading:false,
                admin:payload
            };
        case A_REGISTER_SUCCESS:
        case ADMIN_SUCCESS:
            localStorage.setItem('token',payload.token);
            return{
                ...state,
                ...payload,
                isAuthenticatedAdmin:true,
                loading:false
            };
    
        case A_REGISTER_FAIL:
        case ADMIN_FAIL:
        case ADMIN_ERROR:
        case ADMIN_LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                isAuthenticatedAdmin: false,
                loading:false,
                admin:null
            };
        default:
            return state;
    }
}