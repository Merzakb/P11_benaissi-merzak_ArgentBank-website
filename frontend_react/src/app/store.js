import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authentification/authSlice'
import { getUserDetails } from './authentification/authActions';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

store.dispatch(getUserDetails(localStorage.getItem('token')));

export default store;
