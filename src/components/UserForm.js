import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveDataToStoreFn } from '../actions';
import store from '../store';

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      }
    }

  }

  componentDidMount() {
    let data = store.getState().UserFormDataReducer;
    let isEmpty = Object.values(data).every(x => (x === null || x === ''));

    if (!isEmpty) {
      this.setState({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone
        }
      })
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      data: {
        [name]: value
      }
    })
  }

  render() {
    return (
      <form onSubmit={e => { this.onFormSubmit(e); }}>
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="firstName">First Name:</label>
          <div className="col-sm-10">
            <input type="text" required className="form-control" name="firstName" placeholder="Enter First Name" onChange={this.handleChange.bind(this)} value={this.state.data.firstName} />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="lastName">Last Name:</label>
          <div className="col-sm-10">
            <input type="text" required className="form-control" name="lastName" placeholder="Enter Last Name" onChange={this.handleChange.bind(this)} value={this.state.data.lastName} />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="email">Email:</label>
          <div className="col-sm-10">
            <input type="email" required className="form-control" name="email" placeholder="Enter email" onChange={this.handleChange.bind(this)} value={this.state.data.email} />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="phone">Phone:</label>
          <div className="col-sm-10">
            <input type="number" required className="form-control" name="phone" placeholder="Enter Phone" onChange={this.handleChange.bind(this)} value={this.state.data.phone} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
        </div>
      </form>
    )
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    let formData = Array.prototype.slice.call(e.target)
      .filter(el => el.name)
      .reduce((form, el) => ({
        ...form,
        [el.name]: el.value,
      }), {});

    if (Object.entries(formData).length > 0 && formData.constructor === Object) {
      this.props.saveDataToStoreFn(formData);
      this.props.history.push(`/summaryPage`);
    } else {
      return false;
    }
  };
}

export default connect(null, { saveDataToStoreFn })(UserForm);