import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/images/argentBankLogo.png";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../app/authentification/authSlice'; 
import { getUserDetails } from '../app/authentification/authActions';

const Header = () => {
    const { userInfo, token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserDetails(token));
    }, [dispatch, token]);

    const userName = userInfo?.body.userName;

    const handleLogout = () => {
        dispatch(logout()); 
    };

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
                {token ? (
                    <>
                        <Link to="/dashboard" className='main-nav-item'>
                            <i className="fa fa-user-circle"></i>
                            {userName}
                        </Link>
                        <Link onClick={handleLogout} className='main-nav-item' to="/">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </>
                ) : (
                    <Link className='main-nav-item' to="/signin">
                        <i className="fa fa-user-circle"></i> 
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Header;
