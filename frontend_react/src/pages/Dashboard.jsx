import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Account from '../components/Account';
import EditUserForm from '../components/EditUserForm';
import accountsData from '../common/accountsData.json';
import { getUserDetails } from '../app/authentification/authActions';
import { logout } from '../app/authentification/authSlice'; 
import Error from '../components/Error';

const Dashboard = () => {
    const { userInfo, fetchError, token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getUserDetails(token));
    }, [dispatch, token]);

    const lastName = userInfo?.body.lastName;
    const userDetails = accountsData.clientDetails.find(client => client.lastName === lastName);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/')
    };

    return (
        <main className='main bg-dark'>
            {
                fetchError ? 
                <>
                    <Error>{fetchError}</Error>
                    <button className='edit-button' onClick={handleLogout}>Logout</button>
                </>
                : (
                    <>
                        <div className="header">
                            <EditUserForm />
                        </div>
                        <h2 className="sr-only">Accounts</h2>
                        {userDetails && userDetails.accounts.map(account => (
                            <Account
                                key={account.title}
                                title={account.title}
                                amount={account.amount}
                                desc={account.description}
                                transactions={account.transactions} 
                            />
                        ))}
                    </>
                )
            }
        </main>
    )
}

export default Dashboard;
