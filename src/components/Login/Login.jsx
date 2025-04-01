import { Field, reduxForm } from 'redux-form'
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from 'react-redux';
import {login} from "../../redux/auth-reducer";
import {Navigate} from 'react-router'
import style from "../common/FormControls/FormControls.module.scss"


const LoginForm = (props) => {
    console.log('LoginForm props');
    console.log(props);
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="email" name="email" component={Input} type="text" validate={[required]}/>
            </div>
            <div>
               <Field placeholder="password" name="password" component={Input} type="password" validate={[required]} />
            </div>
            <div>
                <Field name="remember" component={Input} type="checkbox" validate={[required]} /> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>{props.error}</div> }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    /*if (props.isAuth) {
        return <Navigate to="/profile" />
    }*/
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);