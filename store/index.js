import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage for React Native
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {Provider, useSelector, useDispatch, useStore} from 'react-redux';
import {persistStore, persistReducer, PERSIST} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

import authReducer from './Auth';
import profileReducer from './Profile';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['auth', 'profile'],
};

const combinedReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST],
            },
        }),
});

const persistor = persistStore(store);

export {store, persistor, Provider, useSelector, useDispatch, useStore};

export default store;
