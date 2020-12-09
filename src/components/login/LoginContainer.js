import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router';

class LoginContainer extends React.Component {
    render() {
        return (
            this.props.isAuth ?
                <Redirect to='/main' /> :
                <Login {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        loginFault: state.auth.loginFault
    }
}

LoginContainer = connect(mapStateToProps, { login })(LoginContainer);

export default LoginContainer;