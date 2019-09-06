import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../store';
import Input from './common/Input';


class SummaryPage extends Component {

  render() {
    let data = store.getState().UserFormDataReducer;

    return (
      <div className="content">
        <div className='loader hide'></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb40 text-center">
              <h4>Summary Page - <Link to="/">Back</Link></h4>

              <Input name="firstName" label="First Name" placeholderTag="" value={data.firstName} isDisabled={true} />
              <Input name="lastName" label="Last Name" placeholderTag="" value={data.lastName} isDisabled={true} />
              <Input name="email" label="Email" placeholderTag="" value={data.email} isDisabled={true} />
              <Input name="phone" label="Phone" placeholderTag="" value={data.phone} isDisabled={true} />

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SummaryPage;