import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userSignin } from "../app/authentification/authSice"
import { useGetUserDetailsQuery } from '../app/authentification/getUserDetails';
import Error from "../components/Error"


const SignInForm = () => {
    const {isLoading, error, token} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    useEffect(() => {
        if (token ) {
            navigate('/dashboard');
        }
    }, [token, navigate]);

    const submitForm = (data) => {
        dispatch(userSignin(data))
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            {error && <Error>{error}</Error>}

            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" {...register('email')} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register('password')} />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
            </div> 
            <button 
                type='submit' 
                className='sign-in-button' 
                disabled={isLoading}
            >
                {isLoading ?  "loading": 'Sign In'}
            </button>
            
        </form>
    );
};

export default SignInForm;
