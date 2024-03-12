import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import Button from '../components/Button'

const EditUserForm = () => {
    const [displayEditForm, setDisplayEditForm] = useState(false)
    const { userInfo } = useSelector((state) => state.auth);
    const firstName = userInfo?.body.firstName;
    const lastName = userInfo?.body.lastName;
    const userName = userInfo?.body.userName;

    const handleDisplayEditForm = () => {
        setDisplayEditForm(!displayEditForm)
    }

    return (
       <React.Fragment>
            {
                !displayEditForm ? (
                    <React.Fragment>
                        <h1>Welcome back<br />{firstName} {lastName}!</h1>
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
                                <input type="text" id="username" placeholder={userName} />
                            </div>
                            <div className="edit-input-wrapper">
                                <label htmlFor="firstname">First name: </label>
                                <input type="text" id="firstname" placeholder={firstName} disabled ={true}/>
                            </div>
                            <div className="edit-input-wrapper">
                                <label htmlFor="lastname">Last name: </label>
                                <input type="text" id="lastname" placeholder={lastName} disabled ={true} />
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
