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

    
    return (
        <div className="collapse-form">
            <button className="toggle-btn" type="button" onClick={toggleForm}>
                {isOpen ? 'Close' : props.text}
            </button>
            <form className={`form ${isOpen ? 'open' : ''}`}>
                <div className="form-input">
                    <FormGroup
                        id="name"
                        label="Full Name"
                        name="name"
                        inputType="text"
                        onChange={handleInputChange}
                        placeholder="Enter your First and Last Name"
                        required={true}
                    />
                    <FormGroup
                        id="email"
                        label="Email"
                        name="email"
                        inputType="text"
                        onChange={handleInputChange}
                        placeholder="Enter your Email"
                        required={true}
                    />
                    <FormGroup
                        id="mobile"
                        label="Mobile"
                        name="mobile"
                        inputType="text"
                        onChange={handleInputChange}
                        placeholder="Enter your Phonenumber"
                        required={true}
                    />
                    <FormGroup
                        id="address"
                        label="Address"
                        name="address"
                        inputType="text"
                        onChange={handleInputChange}
                        placeholder="City, Country"
                        required={true}
                    />
                </div>
            </form>
        </div>
    );
}

export default DropDown