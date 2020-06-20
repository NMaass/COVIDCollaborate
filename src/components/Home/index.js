import React from 'react';
import Donorhome from "../DonorHome";


import { withAuthorization } from '../Session';
//this is where we're going to check user type, more on that later
const HomePage = () => (
    <div>
        <h1>Home Page</h1>
        <p>Welcome to COVID Collaborate</p>
        <Donorhome>

        </Donorhome>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
