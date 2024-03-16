import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authentification/authSice'
import { authApi } from './authentification/getUserDetails'

const store = configureStore({
    reducer: {
      auth: authReducer,
      [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
})

export default store