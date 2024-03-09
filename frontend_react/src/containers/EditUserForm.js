import React from 'react'
import Button from '../components/Button'

const EditUserForm = () => {
    return (
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
                />
            </div>
        </form>   
    )
}

export default EditUserForm
