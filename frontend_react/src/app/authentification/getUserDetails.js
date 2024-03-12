import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://127.0.0.1:3001/'

export const authApi = createApi({
    reducerPath: 'authApi',
    
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }

            return headers;
            
        },
    }),
    endpoints: (build) => ({
        getUserDetails: build.query({
            query: () => ({
                url: 'api/v1/user/profile',
                method: 'POST',
            }),
        }),
    }),
});

export const { useGetUserDetailsQuery } = authApi;
