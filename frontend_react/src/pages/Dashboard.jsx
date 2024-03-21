import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Account from '../components/Account';
import EditUserForm from '../components/EditUserForm';
import accountsData from '../common/accountsData.json';
import { logout } from '../app/authentification/authSlice'; 
import useAuth from '../hooks/useAuth';
import Error from '../components/Error';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { userInfo, fetchError } = useAuth()

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
