import {REG_SUCCESS, REG_FAIL, USER_AUTH_SUCCESS, USER_AUTH_FAIL} from './types';



export const RegisterSuccess=(data)=>({
    type:REG_SUCCESS,
    payload:data,
})

export const RegisterFail=()=>({
    type: REG_FAIL,
});

export const setUserDetails=(data)=>({
    type:USER_AUTH_SUCCESS,
    payload:data,
})

export const resetUserDetails=()=>({
    type: USER_AUTH_FAIL,
});

