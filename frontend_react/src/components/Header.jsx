import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/images/argentBankLogo.png";
import { useSelector, useDispatch } from 'react-redux';
import { logout, setUserInfo } from '../app/authentification/authSice'; 
import { useGetUserDetailsQuery } from '../app/authentification/getUserDetails';

const Header = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const data = useGetUserDetailsQuery('getUserDetails');
    const userName = userInfo?.body.userName;

    useEffect(() => {
        if (data.isSuccess) {
            dispatch(setUserInfo(data.data));
        }
    }, [data.isSuccess, data.data, dispatch]);

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
                {userName ? (
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

/*


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/images/argentBankLogo.png";
import { useSelector, useDispatch } from 'react-redux';
import { logout, setUserInfo } from '../app/authentification/authSice'; 
import { useGetUserDetailsQuery } from '../app/authentification/getUserDetails';

const Header = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const userName = userInfo?.body.userName;

    const { data, isFetching } = useGetUserDetailsQuery('getUserDetails', {
        pollingInterval: 900000, 
    })
console.log(isFetching);
  useEffect(() => {
    if (data) dispatch(setUserInfo(data))
  }, [data, dispatch])

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
                {!isFetching ? (
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
*/