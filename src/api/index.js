import firebase from 'firebase';

export const createUser = async payload => {
    try {
        // Sign up user with auth
        const signedUpUser = await firebase
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.passwordOne);


        // Delete password from payload
        const secureUserInfo = payload;
        delete secureUserInfo.passwordOne;


        // Save secure user information to db
        await firebase.firestore()
            .collection('users')
            .doc(signedUpUser.user.uid)
        return true;
    } catch (error) {
        console.log(error);
        return {
            error
        };
    }
};

export const getUserType = async () => {
    try {
        const user = firebase.auth().currentUser;
        const data = await firebase.firestore()
            .doc(`users/${user.uid}`)
            .get();
        return {
            ...data.data(),
            userType: user.userType,
        };
    } catch (e) {
        console.log("get user info failed", e);
    }
}
export const claimTask = async (props) => {
    try {
        const data = await firebase.firestore()
            .doc()
    }
    catch (e) {
        console.log("Task claiming failed", e);
    }
}
export const getRequests = async (cb) => {
    try{
        const user = firebase.auth().currentUser;
        return await firebase.firestore()
            .collection('requests')
            .onSnapshot(snap => {
                const docs   = [];

                snap.forEach(
                    doc => {
                        docs.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    }
                );
                cb(docs)
            });
    } catch (e) {
        console.log("Get requests failed", e);
    }
}
