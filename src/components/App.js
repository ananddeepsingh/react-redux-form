import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SummaryPage from './SummaryPage';
import NoMatch from './notFoundPage';
import UserForm from './UserForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <div className="row ">
              <h1 className="display-3 text-center">WELCOME TO THE PAGE</h1>
            </div>
            <div className="row">
              <Switch>
                <Route path="/" exact component={UserForm}></Route>
                <Route path="/summaryPage" exact component={SummaryPage}></Route>
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
