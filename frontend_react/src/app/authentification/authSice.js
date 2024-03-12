import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('token') ?
localStorage.getItem("token") : null

const initialState = {
    isLoading : false,
    userInfo: null,
    token: token,
    error: "",
};

export const userSignin = createAsyncThunk("auth/signin", async ({email, password}) => {
    try {
        const config = {
            headers : {
                'Content-Type': 'application/json',
            }
        };
       
        const { data } = await axios.post(
            'http://localhost:3001/api/v1/user/login', 
            { email, password },
            config
        )

        const usertoken = data.body.token
        localStorage.setItem("token", usertoken);
        console.log(data);
        return data
    } catch(error) {
        console.log(error.message);
        throw error;
    }
});

const authSlice = createSlice({
    name: "authSlice",
    initialState : initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token');
            state.isLoading = false;
            state.userInfo = null;
            state.token = null;
            state.error = null;
        },
        setUserInfo: (state, { payload } ) => {
            state.userInfo = payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(userSignin.pending, state => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(userSignin.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.token = payload.body.token
            state.userInfo = payload;
            state.error = null;
        });

        builder.addCase(userSignin.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
});

export const {logout,  setUserInfo} =  authSlice.actions;
export default authSlice.reducer;