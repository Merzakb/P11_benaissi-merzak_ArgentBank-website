import React, {useState} from 'react'
import Button from '../components/Button'

const EditUserForm = () => {
    const [displayEditForm, setDisplayEditForm] = useState(false)

    const handleDisplayEditForm = () => {
        setDisplayEditForm(!displayEditForm)
    }

    return (
       <React.Fragment>
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
                        <form>
                            <div className="edit-input-wrapper">
                                <label htmlFor="username">User name: </label>
                                <input type="text" id="username" placeholder='Tony_T' />
                            </div>
                            <div className="edit-input-wrapper">
                                <label htmlFor="firstname">First name: </label>
                                <input type="text" id="firstname" placeholder='Tony' disabled ={true}/>
                            </div>
                            <div className="edit-input-wrapper">
                                <label htmlFor="lastname">Last name: </label>
                                <input type="text" id="lastname" placeholder='Jarvis' disabled ={true} />
                            </div>
                            <div className='edit-btn-wrapper'>
                                <Button
                                    txt="Save"
                                    className="edit-form-button"
                                />
                                <Button
                                    txt="Cancel"
                                    className="edit-form-button"
                                    func={handleDisplayEditForm}
                                />
                            </div>
                        </form>  
                    </div>
                )
            }
       </React.Fragment> 
    )
}

export default EditUserForm
