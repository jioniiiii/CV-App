import { useState } from 'react'
import { FormGroup } from '../form/form';
import './dropDown.css'

function DropDown(props){
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({//psax aprapano
        name: '',
        email: '',
        mobile: '',
        address: '',
        edu: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
        compName: '',
        pos: '',
        workStartDate: '',
        workEndDate: '',
        workLoc: '',
        desc: ''
    });//this and his function handle the sta of the input field(it checks when a srting have been added)
    const [submittedData, setSubmittedData] = useState([]);

    const toggleForm = () => {
        setIsOpen(!isOpen);
    }

    const handleInputChange = (e) => {//psax aprapano
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {//psax aprapano
        e.preventDefault();
        setSubmittedData([...submittedData, formData]);
        setFormData({
            name: '',
            email: '',
            mobile: '',
            address: '',
            edu: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
            compName: '',
            pos: '',
            workStartDate: '',
            workEndDate: '',
            workLoc: '',
            desc: ''
        })
    }
    
    return (
        <div className="collapse-form">
            <button className="toggle-btn" type="button" onClick={toggleForm}>
                {isOpen ? 'Close' : props.text}
            </button>
            {isOpen && (
                <form className={`form ${isOpen ? 'open' : ''}`} onSubmit={handleSubmit}>
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
                                <button type="submit">Submit</button>
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
                </form>
            )}
            {submittedData.length > 0 && (//psax aprapano
                <div className="submitted-data">
                    <h3>Submitted Data:</h3>
                    {submittedData.map((data, index)=>
                        <div key={index}>
                            {Object.entries(data).map(([key, value]) =>(
                                <p key={key}><strong>{key}</strong>:{value}</p>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default DropDown