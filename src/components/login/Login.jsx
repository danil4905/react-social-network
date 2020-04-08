import React from 'react';
import classes from './login.module.css'
import { reduxForm, Field } from 'redux-form';
import {Input} from '../common/FormControls/FormControls';
import { requiredField, MaxLengthCreator } from '../../validators/validators';
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const maxLengthLogin = MaxLengthCreator(50);
const maxLengthPassword = MaxLengthCreator(16)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='email' type='email' placeholder={'Email'} component={Input} autofocus={true} validate={[requiredField, maxLengthLogin]}/>
            </div>
            <div>
                <Field placeholder='password' type='password' name='password' component={Input} validate={[requiredField, maxLengthPassword]}/>
            </div>
            <div>
                <Field type='checkbox' name='rememberMe' component={Input} />Remember me
            </div>
            {props.error && <div>
                {props.error}
            </div>
            }
            <div>
                <button className={classes.btn}>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) return <Redirect to='/profile' />
    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);