import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import AboutPage from "../About";
import ContactUs from "../ContactUs";
import ContactUsform from "../ContactUs/ContactUs";


import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import DonorHome from "../DonorHome";

import Hospitaladdress from "../Hospital-Address";

const App = () => (
    <Router>
        <div>
            <Navigation />

            <hr />
            {/*here's where routes are stored and linked to their components like covidcollaborate.com*/}
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
                exact
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
            />
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route exact path={ROUTES.ADMIN} component={AdminPage} />
            <Route exact path={ROUTES.ABOUT_PAGE} component={AboutPage} />
            <Route exact path={ROUTES.HOSPITAL_ADDRESS} component={Hospitaladdress} />
            <Route exact path={ROUTES.CONTACT_US} component={ContactUs}/>

        </div>
    </Router>
);

export default withAuthentication(App);
