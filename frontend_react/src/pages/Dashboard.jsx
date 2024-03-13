import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Account from '../components/Account'
import EditUserForm from '../app/authentification/features/EditUserForm'
import accountsData from '../common/accountsData.json'
import { setUserInfo } from '../app/authentification/authSice';
import { useGetUserDetailsQuery } from '../app/authentification/getUserDetails';

const Dashboard = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch =  useDispatch()

    const data = useGetUserDetailsQuery('getUserDetails')

    useEffect(() => {
        if (data.isSuccess) {
            dispatch(setUserInfo(data.data));
        }
    }, [data.isSuccess, data.data, dispatch]);

    const lastName = userInfo?.body.lastName;
    const userDetails = accountsData.clientDetails.find(client => client.lastName === lastName);

    return (
        <main className='main bg-dark'>
            <div  className="header">
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
        </main>
    )
}

export default Dashboard