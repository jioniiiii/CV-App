import React from 'react';

function SubmittedDataDisplay({ data }) {
    return (
        <div className="submitted-data">
            <h3>Current Data:</h3>
            {Object.entries(data).map(([section, sectionData], index) => (
                <div key={index}>
                    <h4>{section}</h4>
                    {Object.entries(sectionData).map(([key, value]) => (
                        <p key={key}><strong>{key}</strong>: {value}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default SubmittedDataDisplay;