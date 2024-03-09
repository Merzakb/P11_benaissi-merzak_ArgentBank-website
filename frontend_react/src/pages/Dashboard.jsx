import React, {useState} from 'react'
import Button from '../components/Button'
import Account from '../components/Account'
import EditUserForm from '../containers/EditUserForm'

const Dashboard = () => {
    const [displayEditForm, setDisplayEditForm] = useState(false)

    const handleDisplayEditForm = () => {
        setDisplayEditForm(true)
    }

    return (
        <main className='main bg-dark'>
            <div className="header">
                {
                    !displayEditForm ? (
                        <React.Fragment>
                            <h1>Welcome back<br />Tony Jarvis!</h1>
                            <Button 
                                txt="Edit Name"
                                className="edit-button"
                                func={handleDisplayEditForm}
                            />
                        </React.Fragment>
                    ) : (
                        <div className='edit-content'>
                            <h1>Edit user info</h1>
                            <EditUserForm />
                        </div>
                    )
                }
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
