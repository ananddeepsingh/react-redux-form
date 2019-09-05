import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveDataToStoreFn } from '../actions';


class UserForm extends Component {
  render() {
    return (
      <form onSubmit={e => { this.onFormSubmit(e); }}>
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="firstName">First Name:</label>
          <div className="col-sm-10">
            <input type="text" required className="form-control" name="firstName" placeholder="Enter First Name" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="lastName">Last Name:</label>
          <div className="col-sm-10">
            <input type="text" required className="form-control" name="lastName" placeholder="Enter Last Name" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="email">Email:</label>
          <div className="col-sm-10">
            <input type="email" required className="form-control" name="email" placeholder="Enter email" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="phone">Phone:</label>
          <div className="col-sm-10">
            <input type="number" required className="form-control" name="phone" placeholder="Enter Phone" />
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

    console.log(formData);
    if (Object.entries(formData).length > 0 && formData.constructor === Object) {
      this.props.saveDataToStoreFn(formData);
      this.props.history.push(`/summaryPage`);
    } else {
      return false;
    }
  };
}

export default connect(null, { saveDataToStoreFn })(UserForm);