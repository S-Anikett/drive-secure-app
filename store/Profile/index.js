import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

export const profileStore = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileStore: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },

        resetProfileStore: () => {
            return initialState;
        },
    },
});

export const {setProfileStore, resetProfileStore} = profileStore.actions;

export default profileStore.reducer;
