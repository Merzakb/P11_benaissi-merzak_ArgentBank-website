import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <main className="main main-error bg-dark">
            <p className=""> <i className="fa fa-exclamation-triangle" aria-hidden="true"></i></p>
            <p className="">Oops! The page you are requesting does not exist.</p>
            <Link to="/" className="main-error-link">Return to the home page</Link>
        </main>
    )
}

export default NotFound
