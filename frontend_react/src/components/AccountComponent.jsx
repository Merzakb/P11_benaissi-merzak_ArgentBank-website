import React, {useState} from 'react'
import ButtonComponent from './ButtonComponent'

const AccountComponent = ({title, amount, desc}) => {

    const [displayTransactions, setDisplayTransactions] = useState(false)

    const handleDisplayTransactions = () => {
        setDisplayTransactions(!displayTransactions)
    }

    return (
        <div className='account-transactions'>
            <section className='account'>
                <div className='account-content-wrapper'>
                    <h3 className="account-title">{title}</h3>
                    <p className="account-amount">{amount} </p>
                    <p className="account-amount-description">{desc}</p>
                </div>
                <div className="account-content-wrapper cta">
                    <ButtonComponent 
                        txt="View transactions"
                        className="transaction-button"
                        func={handleDisplayTransactions}
                    />
                </div>
            </section>
            {
                displayTransactions && (
                    <div className="transaction-details">
                        <table className='table'>
                            <thead className='thead'>
                                <tr>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody className='tbody'>
                                {Array.from({ length: 5 }, (_, index) => (
                                    <tr key={index}>
                                    <td>{/* Date */}</td>
                                    <td>{/* Description */}</td>
                                    <td>{/* Amount */}</td>
                                    <td>{/* Balance */}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
        </div>
    )
}

export default AccountComponent
