import { createSlice } from "@reduxjs/toolkit";
import { userSignin, getUserDetails, editUsername } from "./authActions";

const initialState = {
    isLoading : false,
    userInfo: null,
    token: null,
    error: "",
    fetchError : ""
};

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
            state.fetchError = null
        },
        setUserInfo: (state, { payload } ) => {
            state.userInfo = payload;
        }
    },
    extraReducers: builder => {
        // for signin
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
        // for fetching user details
        builder.addCase(getUserDetails.pending, (state) => {
            state.isLoading = true;
            state.fetchError = null;
        });
        builder.addCase(getUserDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userInfo = action.payload; 
            state.fetchError = null;
        });
        builder.addCase(getUserDetails.rejected, (state, action) => {
            state.isLoading = false;
            state.fetchError = action.error.message;
        });

        // for edit username
        builder.addCase(editUsername.pending, (state) => {
            state.isLoading = true;
            state.fetchError = null;
        })
        builder.addCase(editUsername.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userInfo.body.userName = action.payload.body.userName; 
        })
        builder.addCase(editUsername.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message === 'Unauthorized') {
              localStorage.removeItem('token');
            } else {
              state.error = action.error.message;
            }
        });  
    }
});

export const { logout, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
