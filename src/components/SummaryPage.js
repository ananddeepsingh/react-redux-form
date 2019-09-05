import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../store';


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

              <div className="form-group">
                <label className="control-label col-sm-5 text-right" htmlFor="firstName">First Name:</label>
                <div className="col-sm-5 text-left">
                  {data.firstName}
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-5 text-right" htmlFor="lastName">Last Name:</label>
                <div className="col-sm-5 text-left">
                {data.lastName}  
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-5 text-right" htmlFor="email">Email:</label>
                <div className="col-sm-5 text-left">
                {data.email}  
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-5 text-right" htmlFor="phone">Phone:</label>
                <div className="col-sm-5 text-left">
                {data.phone}  
                </div>
              </div>
              
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-12 col-12">

            </div>
            <div className="col-md-3 col-sm-12 col-12">

            </div>
            <div className="col-md-3 col-sm-12 col-12">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SummaryPage;