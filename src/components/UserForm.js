import React from 'react';
import { connect } from 'react-redux';
import { saveDataToStoreFn } from '../actions';
import store from '../store';
import Form from './common/Form';

class UserForm extends Form {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      },
      errors: {}
    }
  }

  componentDidMount() {
    let data = store.getState().UserFormDataReducer;
    let isEmpty = Object.values(data).every(x => (x === null || x === ''));

    const { firstName, lastName, email, phone } = data

    if (!isEmpty) {
      this.setState({
        data: {
          firstName,
          lastName,
          email,
          phone
        }
      })
    }
  }

  validate = () => {
    const errors = {};
    if (this.state.data.firstName.trim() === '') {
      errors.firstName = 'First name is required';
    } else if (this.state.data.lastName.trim() === '') {
      errors.lastName = 'Last name is required';
    } else if (this.state.data.email.trim() === '') {
      errors.email = 'Email is required';
    } else if (this.state.data.phone.trim() === '') {
      errors.phone = 'Phone name is required';
    }

    return Object.keys(errors).length === 0 ? null : errors;
  }

  doSubmit = (e) => {
    let formData = Array.prototype.slice.call(e.target)
      .filter(el => el.name)
      .reduce((form, el) => ({
        ...form,
        [el.name]: el.value,
      }), {});

    if (Object.entries(formData).length > 0 && formData.constructor === Object) {
      this.props.saveDataToStoreFn(formData); // saving form data to store by using action
      this.props.history.push(`/summaryPage`); // redirecting to summary page
    } else {
      return false;
    }
  }

  render() {
    return (
      <form onSubmit={e => { this.onFormSubmit(e); }}>
        {this.renderInput('text','firstName', 'First Name', 'Please Enter User Name', false)}
        {this.renderInput('text','lastName', 'Last Name', 'Please Enter Last Name', false)}
        {this.renderInput('email','email', 'Email', 'Please Enter Email', false)}
        {this.renderInput('number','phone', 'Phone', 'Please Enter Phone', false)}
        {this.renderButton('Submit')}
      </form>
    )
  }

}

export default connect(null, { saveDataToStoreFn })(UserForm);