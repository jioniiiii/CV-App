import { useState } from 'react'
import { FormGroup } from '../form/form';
import './dropDown.css'

function DropDown(props){
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState('');//this and his function handle the sta of the input field(it checks when a srting have been added)

    const toggleForm = () => {
        setIsOpen(!isOpen);
    }

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    return(
        <div className="collapse-form">
            <button className="toggle-btn" onClick={toggleForm}>
                {isOpen ? 'Close' : props.text}
            </button>
            {isOpen && (
                <form className="form">
                    <div className="form-input">
                    <FormGroup
                        id="name"
                        label="Name"
                        name="name"
                        inputType="text"
                        value={name}//managment for form
                        onChange={handleInputChange}
                        placeholder="Enter your Name"
                        required={true}
                    />
                    <FormGroup
                        id="lname"
                        label="Last Name"
                        name="name"
                        inputType="text"
                        value={name}
                        onChange={handleInputChange}
                        placeholder="Enter your Last Name"
                        required={true}
                    />
                    <FormGroup
                        id="mobile"
                        label="Mobile"
                        name="mobile"
                        inputType="text"
                        value={name}
                        onChange={handleInputChange}
                        placeholder="Enter your Phonenumber"
                        required={true}
                    />
                    </div>
                </form>
            )}
        </div>
    );
}

export default DropDown