import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const SignInPage = () => (
    <div className="signInForm centered-container">
        <div className="col-4 col-s-8">
        <h1>SignIn</h1>
        <SignInForm />
        <PasswordForgetLink />
        <SignUpLink />
        </div>
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    type: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    className="field"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    className="field"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <Button
                    className="field"
                    disabled={isInvalid}
                    type="submit">
                    Log In
                </Button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

const SignInLink = () => (
    <p className="signInLink center">
        <Link to={ROUTES.SIGN_IN}>Log in</Link>
    </p>
);

const SignInLink2 = () => (
    <p className="signInLink center">
        Go back to <Link to={ROUTES.SIGN_IN}>Log in</Link>
    </p>
);


export { SignInForm, SignInLink, SignInLink2 };
