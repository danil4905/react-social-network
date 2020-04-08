import React from 'react';
import classes from './login.module.css'
import { reduxForm, Field } from 'redux-form';
import {Input} from '../common/FormControls/FormControls';
import { requiredField, MaxLengthCreator } from '../../validators/validators';

const maxLengthLogin = MaxLengthCreator(10);
const maxLengthPassword = MaxLengthCreator(10)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} placeholder={'Login'} component={Input} autofocus={true} validate={[requiredField, maxLengthLogin]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={"password"} component={Input} validate={[requiredField, maxLengthPassword]}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={Input} />Remember me
            </div>
            <div>
                <button className={classes.btn}>Login</button>
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