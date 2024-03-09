import React from 'react'
import Account from '../components/Account'
import EditUserForm from '../containers/EditUserForm'
import accountsData from '../common/accountsData.json'

const Dashboard = () => {
    const userName = "Captain"
    const userDetails = accountsData.clientDetails.find(client => client.userName === userName);
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
                    transactions={account.transactions} // Passer les transactions ici
                />
            ))}
        </main>
    )
}

export default Dashboard
