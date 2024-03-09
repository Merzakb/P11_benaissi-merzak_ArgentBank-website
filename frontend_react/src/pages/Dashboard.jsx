import React from 'react'
import Account from '../components/Account'
import EditUserForm from '../containers/EditUserForm'

const Dashboard = () => {
    return (
        <main className='main bg-dark'>
            <div  className="header">
            <EditUserForm />
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account 
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                desc="Available Balance"
            />
            <Account 
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                desc="Available Balance"
            />
            <Account 
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                desc="View EditForm"
            />
        </main>
    )
}

export default Dashboard
