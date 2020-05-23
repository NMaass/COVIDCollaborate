import React from 'react';

import { withAuthorization } from '../Session';
//this is where we're going to check user type, more on that later
const HomePage = () => (
    <div>
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user.</p>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
