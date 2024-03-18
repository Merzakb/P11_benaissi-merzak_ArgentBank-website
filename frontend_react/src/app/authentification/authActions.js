import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userSignin = createAsyncThunk("auth/signin", 
    async ({email, password}, { rejectWithValue }) => {
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
            
            return data
        } catch (error) {
            // Custom error messages
            let errorMessage = "An error occurred while signing in.";
            if (error.response) {
                // Error from server
                if (error.response.status === 400) {
                    errorMessage = "Invalid email or password.";
                } else if (error.response.data.message) {
                    errorMessage = error.response.data.message;
                }
            } else if (error.message) {
                // Network or other error
                errorMessage = error.message;
            }

            throw new Error(errorMessage); // Throw error directly
        }
    }
);


export const editUsername = createAsyncThunk("auth/editUsername", 
    async ({userName, token}, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            };
        
            const { data } = await axios.put(
                'http://localhost:3001/api/v1/user/profile', 
                {userName },
                config
            )
            console.log(data);
            return data
            
        } catch (error) {
            if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
            } else {
            return rejectWithValue(error.message)
            }
        }
    }
);