import React from 'react'
import SignInForm from '../components/SignInForm'

const SignIn = () => {
    return (
        <main className='main bg-dark'>
            <section className='sign-in-content'>
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <SignInForm />
            </section>
        </main>
    )
}

export default SignIn
