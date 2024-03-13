import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignin } from "../authActions";
import Error from "../../../components/Error";
import Spinner from '../../../components/Spinner';

const SignInForm = () => {
    const { isLoading, error, token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(false);

    const emailValue = watch('email');
    const passwordValue = watch('password');

    useEffect(() => {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        const rememberedPassword = localStorage.getItem('rememberedPassword');
        if (rememberedEmail && rememberedPassword) {
            setValue('email', rememberedEmail);
            setValue('password', rememberedPassword);
        }
    }, [setValue]);

    useEffect(() => {
        if (token) {
            navigate('/dashboard');
        }
    }, [token, navigate]);

    const submitForm = (data) => {
        dispatch(userSignin({ ...data, rememberMe }));
        if (rememberMe) {
            localStorage.setItem('rememberedEmail', data.email);
            localStorage.setItem('rememberedPassword', data.password);
        } else {
            localStorage.removeItem('rememberedEmail');
            localStorage.removeItem('rememberedPassword');
        }
    }

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            {error && <Error>{error}</Error>}
            <div className="input-wrapper">
            {errors.email && <Error>{errors.email.message}</Error>}
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name='email' {...register('email', { required: 'email is required' })} />
            </div>
            <div className="input-wrapper">
            {errors.password && <Error>{errors.password.message}</Error>}
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name='password' {...register('password', { required: 'password is required' })} autoComplete="current-password" />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" onChange={handleRememberMeChange} />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button 
                type='submit' 
                className='sign-in-button' 
                disabled={isLoading || !emailValue || !passwordValue}
            >
                {isLoading ?   <Spinner />: 'Sign In'}
            </button>
        </form>
    );
};

export default SignInForm;
