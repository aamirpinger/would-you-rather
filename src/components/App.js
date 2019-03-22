import React, { Component } from 'react';
import { withRouter, } from 'react-router-dom'
import { connect } from 'react-redux';
import { dispatch_initialDataAction } from '../actions/actionDispatchers'
import Loader from './Loader'
import './styles/App.css';
import Routers from '../routers';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(dispatch_initialDataAction())
  }

  render() {

    if (this.props.loading) {
      return <Loader />
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
