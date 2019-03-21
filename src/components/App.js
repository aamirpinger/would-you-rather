import React, { Component } from 'react';
import { withRouter, } from 'react-router-dom'
import '../utils/App.css';
import { connect } from 'react-redux';
import { dispatch_initialDataAction } from '../actions/actionDispatchers'


import Routers from '../routers';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(dispatch_initialDataAction())
  }

  render() {

    if (this.props.loading) {
      return <h1>Loading data, please wait....</h1>
    }

    return (
      <div>
        <Routers />
      </div>


    );
  }
}

const mapStateToProps = (state) => ({ loading: state.loading })

export default withRouter(connect(mapStateToProps)(App));
