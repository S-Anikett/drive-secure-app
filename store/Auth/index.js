import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    error: null,
    expire_at: null,
    token: null,
    authLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        initiateLogin: state => {
            return {
                ...state,
                authLoading: true,
            };
        },

        loginSuccess: (state, {payload}) => {
            const {token = null, expire_at = null} = payload || {};

            return {
                ...state,
                error: null,
                expire_at,
                token,
                authLoading: false,
            };
        },

        loginFailure: (state, {payload}) => {
            return {
                ...state,
                token: null,
                error: payload,
                authLoading: false,
            };
        },

        logOutSucess: () => {
            return initialState;
        },

        logOutFailure: (state, {payload}) => {
            return {
                ...state,
                error: payload,
            };
        },
    },
});

export const {
    initiateLogin,
    loginSuccess,
    loginFailure,
    logOutFailure,
    logOutSucess,
} = authSlice.actions;
export default authSlice.reducer;
