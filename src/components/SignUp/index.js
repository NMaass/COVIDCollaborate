import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DonorFields from "../DonorFields";
import * as ROLES from '../../constants/roles';
import {createUser} from "../../api";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";


const SignUpPage = () => (
    <div className="signInForm centered-container SignupImage ">
        <div className="col-4 col-s-8">
            <h1>User SignUp</h1>
            <SignUpForm />
        </div>
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zip : '',
    website: '',
    isDonor: false,
    error: null,
    isSignedUp: false
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = async event => {


        event.preventDefault();

        const {username, email, passwordOne, isDonor, address, city, state, country, zip, website} = this.state;
        const roles = [];

        if (isDonor) {
            roles.push(ROLES.DONOR)
        } else {
            roles.push(ROLES.HOSPITAL)
        }

        const payload = {
            username,
            email,
            passwordOne,
            usertype: isDonor ? 'donor' : 'hospital',
            address_detail: {
                address,
                city,
                zip,
                country,
                state
            },
            website
        }
        const result = await createUser(payload);
        console.log("Create user failed", result)
        if (result.error || result !== true) {
            this.setState({error: result.error});
        }

        this.setState({...INITIAL_STATE});
        this.props.history.push(ROUTES.HOME);
    };
    handleCheck = event => {
        this.setState({[event.target.name]: event.target.checked});
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            isDonor,
            address,
            city,
            state,
            country,
            zip,
            website,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}>
                <FormControlLabel control={
                    <Checkbox
                        checked={isDonor}
                        onChange={this.handleCheck}
                        name="isDonor"
                    />
                }   label = "I am a donor"
                />
                <input
                    className="field"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
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
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    className="field"
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <input
                    className="field"
                    name="address"
                    value={address}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Address"
                />
                <input
                    className="field"
                    name="city"
                    value={city}
                    onChange={this.onChange}
                    type="text"
                    placeholder="City"
                />
                <input
                    className="field"
                    name="state"
                    value={state}
                    onChange={this.onChange}
                    type="text"
                    placeholder="State/Province"
                />
                <input
                    className="field"
                    name="country"
                    value={country}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Country"
                />
                <input
                    className="field"
                    name="zip"
                    value={zip}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Zip Code"
                />
                <input
                    className="field"
                    name="website"
                    value={website}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Website"
                    style={{visibility: this.state.isDonor ? 'hidden' : 'visible'}}
                />
                <DonorFields
                    style={{visibility: this.state.isDonor ? 'visible' : 'hidden'}}
                />
                <button
                    className="field"
                    disabled={isInvalid}
                    type="submit">
                    Sign Up
                </button>


                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
