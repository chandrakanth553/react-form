import React from 'react';

const Input = ({ name, label, value, onChange, type, error, ...rest }) => {
    let classes = error ? "form-control is-invalid" : "form-control"
    return ( 
        <div className="form-group">
            <label 
                htmlFor={name}>{label}</label>
            <input 
                type={type} 
                className={classes}
                onChange={onChange}
                name={name} 
                id={name}
                value={value} 
                placeholder={label}
                {...rest}
                />
            {error && <div className="invalid-feedback">
               {error}
            </div>}
        </div>
     );
}
 
export default Input;