import './form.css'

export const FormGroup =({id,label,name,inputType,onChange,placeholder,big,required}) => {
    return (
        <div className='form-row'>
            <label htmlFor={id}>{label}</label>
            <div className='input'>
                {big ?  <textarea id={id}  
                                  type={inputType} 
                                  name={name} 
                                  placeholder={placeholder} 
                                  onChange={onChange} 
                                  required={required} /> :
                        <input id={id} 
                               type={inputType} 
                               name={name} 
                               placeholder={placeholder} 
                               onChange={onChange} 
                               required={required} />
                }
            </div>
        </div>
    )
}