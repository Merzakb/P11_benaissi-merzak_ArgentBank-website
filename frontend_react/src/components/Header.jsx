import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/argentBankLogo.png"

const HeaderComponent = ({isAuthenticated}) => {
    isAuthenticated = true

  return (
    <nav className='main-nav'>
        <Link to="/" className='main-nav-logo'>
            <img 
                src={Logo} alt="Argent Bank Logo"
                className='main-nav-logo-image'
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
            {
                isAuthenticated ? (
                    <React.Fragment>
                        <Link to="dashboard" className='main-nav-item'>
                            <i className="fa fa-user-circle"></i>
                            Tony
                        </Link>
                        <Link className='main-nav-item' to="/">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </React.Fragment>
                ) : (
                    <Link className='main-nav-item' to="/signin">
                        <i className="fa fa-user-circle"></i> 
                        Sign In
                    </Link>
                )
            }
        </div>
    </nav>
  )
}

export default HeaderComponent
