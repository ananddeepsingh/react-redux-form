import React from 'react';

const Input = ({ name, label, placeholderTag, isDisabled, error, ...rest }) => {
    // console.log('disabled val',isDisabled)
    return (
        <React.Fragment>
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor={name}>{label}:</label>
                <div className="col-sm-10">
                    <input 
                        {...rest}
                        className={"form-control " + (isDisabled ? 'disabledInput' : '')} 
                        name={name} 
                        placeholder={placeholderTag} 
                        disabled={isDisabled} 
                    />
                </div>
                {/* If error come only then below div will come  */}
            </div>
            {error && <div className="alert alert-danger">Custom Message - {error}</div>}
        </React.Fragment>
    );
}


export default Input;