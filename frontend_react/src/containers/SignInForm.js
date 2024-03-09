import React from 'react';
import Button from '../components/Button';

const SignInForm = () => {
    return (
        <form>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
            </div>
            <Button 
                txt="Sign In"
                className="sign-in-button"
            />
        </form>
    );
};

export default SignInForm;
