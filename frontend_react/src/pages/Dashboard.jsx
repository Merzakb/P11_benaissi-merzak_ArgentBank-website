import React from 'react'
import { useSelector} from 'react-redux';
import Account from '../components/Account'
import EditUserForm from '../app/authentification/features/EditUserForm'
import accountsData from '../common/accountsData.json'

const Dashboard = () => {
    const { userInfo } = useSelector((state) => state.auth);
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