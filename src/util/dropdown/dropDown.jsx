import { useState, useRef , useEffect } from 'react'
import { FormGroup } from '../form/form';
import { CSSTransition } from 'react-transition-group';
import './dropDown.css'

function DropDown(props){
    const [isOpen, setIsOpen] = useState(false);//tracks whether the form is open or closed
    const formRef = useRef(null);//used to help manage animations and transitions(DOM manipulation)
    const [formData, setFormData] = useState(props.initialData);

    useEffect(() => {
        setFormData(props.initialData);
    }, [props.initialData]);

    const toggleForm = () => { //opening/close for form
        setIsOpen(!isOpen);
    }

    const handleInputChange = (e) => {//changes the form data real time
        const { name, value } = e.target;
        const updatedFormData = {
            ...formData,
            [name]: value
        };
        setFormData(updatedFormData);
        props.onInputChange(updatedFormData, props.text); //real time update
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData(props.initialData);
    };
    
    return (
        <div className="collapse-form">
            <button className={`toggle-btn ${isOpen ? 'close' : ''}`} type="button" onClick={toggleForm}>
                {isOpen ? 'Close' : props.text}
            </button>
            <CSSTransition
                in = {isOpen}
                timeout = {500}
                classNames = "form"
                unmountOnExit
                nodeRef={formRef}
            >
                <form ref={formRef} className={`form ${isOpen ? 'open' : ''}`} onSubmit={handleSubmit}>
                    <div className="form-input">
                    {props.text === "General Info" ? (
                            <>
                                <FormGroup
                                    id="name"
                                    label="Full Name"
                                    name="name"
                                    inputType="text"
                                    onChange={handleInputChange}
                                    placeholder="Enter your First and Last Name"
                                    value={formData.name}
                                    required={true}
                                />
                                <FormGroup
                                    id="email"
                                    label="Email"
                                    name="email"
                                    inputType="text"
                                    onChange={handleInputChange}
                                    placeholder="Enter your Email"
                                    value={formData.email}
                                    required={true}
                                />
                                <FormGroup
                                    id="mobile"
                                    label="Mobile"
                                    name="mobile"
                                    inputType="text"
                                    onChange={handleInputChange}
                                    placeholder="Enter your Phonenumber"
                                    value={formData.mobile}
                                    required={true}
                                />
                                <FormGroup
                                    id="address"
                                    label="Address"
                                    name="address"
                                    inputType="text"
                                    onChange={handleInputChange}
                                    placeholder="City, Country"
                                    value={formData.address}
                                    required={true}
                                />
                                
                            </>
                        ) : null}
                        {props.text === "Education" ? (
                            <>
                                <FormGroup
                                    id="edu"
                                    label="School/University"
                                    name="edu"
                                    inputType="text"
                                    onChange={handleInputChange}
                                    placeholder="Enter School/University"
                                    value={formData.edu}
                                    required={true}
                                />
                                <FormGroup
                                    id="degree"
                                    label="Degree"
                                    name="degree"
                                    inputType="text"
                                    onChange={handleInputChange}
                                    placeholder="Enter degree / field of stufy"
                                    value={formData.degree}
                                    required={true}
                                />
                                <FormGroup
                                    id="startDate"
                                    label="Start Degree Date"
                                    name="startDate"
                                    inputType="text"
                                    onChange={handleInputChange}
                                    placeholder="Enter in moth/year"
                                    value={formData.startDate}
                                    required={true}
                                />
                                <FormGroup
                                    id="endDate"
                                    label="End Degree Date"
                                    name="endDate"
                                    inputType="text"
                                    onChange={handleInputChange}
                                    placeholder="Enter in moth/year"
                                    value={formData.endDate}
                                    required={true}
                                />
                                <FormGroup
                                    id="locantion"
                                    label="Location"
                                    name="locantion"
                                    inputType="text"
                                    onChange={handleInputChange}
                                    placeholder="Enter locantion"
                                    value={formData.location}
                                    required={true}
                                />
                            </>
                        ) : null}
                        {props.text === "Experience" ? (
                            <>
                                <FormGroup
                                    id="compName"
                                    label="Company Name"
                                    name="compName"
                                    inputType="text"
                                    onChange={handleInputChange}
                                    placeholder="Enter Company Name"
                                    value={formData.compName}
                                    required={true}
                                />
                                <FormGroup
                                    id="pos"
                                    label="Position Title"
                                    name="pos"
                                    inputType="text"
                                    onChange={handleInputChange}
                                    placeholder="Enter Position Title"
                                    value={formData.pos}
                                    required={true}
                                />
                                <FormGroup
                                    id="workStartDate"
                                    label="Start Experience Date"
                                    name="workStartDate"
                                    inputType="text"
                                    onChange={handleInputChange}
                                    placeholder="Enter in moth/year"
                                    value={formData.workStartDate}
                                    required={true}
                                />
                                <FormGroup
                                    id="workEndDate"
                                    label="End Experience Date"
                                    name="workEndDate"
                                    inputType="text"
                                    onChange={handleInputChange}
                                    placeholder="Enter in moth/year"
                                    value={formData.workEndDate}
                                    required={true}
                                />
                                <FormGroup
                                    id="locantion"
                                    label="Location"
                                    name="locantion"
                                    inputType="text"
                                    onChange={handleInputChange}
                                    placeholder="Enter locantion"
                                    value={formData.workLoc}
                                    required={true}
                                />
                                <FormGroup
                                    id="desc"
                                    label="Description"
                                    name="desc"
                                    inputType="text"
                                    onChange={handleInputChange}
                                    placeholder="Enter Description"
                                    value={formData.desc}
                                    required={true}
                                />
                            </>
                        ) : null}
                    </div>
                    <button className='submit-btn' type="submit">submit</button>
                </form>
            </CSSTransition>
        </div>
    );
}

export default DropDown