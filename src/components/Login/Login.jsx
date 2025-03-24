import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    console.log('LoginForm props');
    console.log(props);
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="login" name="login" component="input" type="text" />
            </div>
            <div>
               <Field placeholder="password" name="password" component="input" type="text" />
            </div>
            <div>
                <Field name="remember" component="input" type="checkbox" /> remember me
            </div>
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
        console.log(formData);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;