import { useState } from "react";
import DropDown from "../dropdown/dropDown";
import SubmittedDataDisplay from "./displayData";
import "./cv.css"

function Display() {
    const [formData, setFormData] = useState({
        "General Info":{
            name: '',
            email: '',
            mobile: '',
            address: ''
        },
        "Education":{
            edu: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: ''
        },
        "Experience":{
            compName: '',
            pos: '',
            workStartDate: '',
            workEndDate: '',
            workLoc: '',
            desc: ''
        }
    })//hold data

    const handleDataSubmit = (newData, section) => {//update for submit
        setFormData(prevFormData => ({
            ...prevFormData,
            [section]: newData
        }));
    };

    const handleInputChange = (updatedFormData, section) => {//update real time
        setFormData(prevFormData => ({
            ...prevFormData,
            [section]: updatedFormData
        }));
    };

    return (
        <div className="container">
            <div className="cont1">
                <DropDown
                    text="General Info"
                    initialData={formData["General Info"]}
                    onSubmit={(data) => handleDataSubmit(data, "General Info")}
                    onInputChange={handleInputChange}
                />
                <DropDown
                    text="Education"
                    initialData={formData["Education"]}
                    onSubmit={(data) => handleDataSubmit(data, "Education")}
                    onInputChange={handleInputChange}
                />
                <DropDown
                    text="Experience"
                    initialData={formData["Experience"]}
                    onSubmit={(data) => handleDataSubmit(data, "Experience")}
                    onInputChange={handleInputChange}
                />
            </div>
            <div className="cont2">
                <SubmittedDataDisplay data={formData} />
            </div>
        </div>
    );
}

export default Display;