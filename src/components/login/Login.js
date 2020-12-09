import React from 'react'
import LoginForm from './LoginForm';
import s from './Login.module.css'

const Login = (props) => {
    return (
        <div className={s.loginWrapper} >
            <div className={s.loginWindowWrapper} >
                <div className={s.loginWindow} >
                    <h3>Please log in</h3>
                    <LoginForm login={props.login} />
                    {props.loginFault && <div className={s.loginFault} >Invalid username or password</div>}
                </div>
            </div>
        </div>
    )
}

export default Login;