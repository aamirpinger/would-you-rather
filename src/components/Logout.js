import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { dispatch_userLoggedOutAction } from '../actions/actionDispatchers'
import { connect } from 'react-redux'


function Logout(props) {
    props.logout()

    return (
        <Redirect from='/' to='/' />
    )
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(dispatch_userLoggedOutAction())
})

export default withRouter(connect(null, mapDispatchToProps)(Logout));
