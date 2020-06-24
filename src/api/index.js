import firebase from 'firebase';

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
