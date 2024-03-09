import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <main className="main main-error bg-dark">
            <p className=""> <i className="fa fa-exclamation-triangle" aria-hidden="true"></i></p>
            <p className="">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="main-error-link">Retournez sur la page d’accueil</Link>
        </main>
    )
}

export default Error
