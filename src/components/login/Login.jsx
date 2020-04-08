import React from 'react';
import classes from './login.module.css'
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} placeholder={'Login'} component={"input"} />
            </div>
            <div>
                <Field placeholder={'Password'} name={"password"} component={"input"} />
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={"input"} />Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;