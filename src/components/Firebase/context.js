import React from 'react';

const FirebaseContext = React.createContext(null);
//this is a "context creator" for linking our firebase database to components more on that here: https://reactjs.org/docs/context.html
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;
