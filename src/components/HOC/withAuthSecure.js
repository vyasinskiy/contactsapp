import { connect } from "react-redux";
import React from 'react';
import { Redirect } from "react-router";

const withAuthSecure = (Component) => {
    let checkUserAuth = (props) => {
        if(props.isAuth){
            return <Component />
        }
        else {
            return(
                <Redirect to='/login'/> 
            )
        }
    }
    const mapStateToProps = (state) => {
        return {isAuth: state.auth.isAuth}
    }
    checkUserAuth = connect(mapStateToProps, null)(checkUserAuth);
    return checkUserAuth;
}

export default withAuthSecure;