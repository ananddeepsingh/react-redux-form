import React, { Component } from 'react';
import Input from './Input';

export default class Form extends Component {
    state = {
        data: {},
        errors: {}
    }


    onFormSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        if (errors) {
            this.setState({ errors: errors || {} })
            return;
        }

        // calling submit functionality
        this.doSubmit(e);
    };


    validateProperty = ({ name, value }) => {
        if (name === 'firstName') {
            if (value.trim() === '') return 'First Name is required'
        }
        if (name === 'lastName') {
            if (value.trim() === '') return 'Last Name is required'
        }
        if (name === 'email') {
            if (value.trim() === '') return 'Email is required'
        }
        if (name === 'phone') {
            if (value.trim() === '') return 'Phone is required'
        }
    }

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(target);

        if (errorMessage) errors[target.name] = errorMessage;
        else delete errors[target.name];

        const existingData = this.state.data;
        this.setState({
            data: {
                ...existingData, // on validation to avoid reset the state to blank 
                [name]: value
            },
            errors
        })
    }

    renderButton(label) {
        return (
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" disabled={this.validate()} className="btn btn-default">{label}</button>
                </div>
            </div>
        )
    }

    renderInput(inputType, name, label, placeholderTagVal, isDisabled) {
        const { data, errors } = this.state;

        return (
            <Input 
                type={inputType} 
                name={name} 
                label={label} 
                placeholderTag={placeholderTagVal}
                value={data[name]}
                onChange={this.handleChange}
                isDisabled={isDisabled}
                error={errors[name]} 
            />)
        
    }
}