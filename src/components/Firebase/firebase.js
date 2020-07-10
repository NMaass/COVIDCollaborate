import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyBJn0f9jY_bU1lXzsiTgUADQmkTUysoz68",
    authDomain: "covidcollaborate.firebaseapp.com",
    databaseURL: "https://covidcollaborate.firebaseio.com",
    projectId: "covidcollaborate",
    storageBucket: "covidcollaborate.appspot.com",
    messagingSenderId: "807042052247",
    appId: "1:807042052247:web:1e94a2caf32b6fe1a1b9d2",
    measurementId: "G-R1FLLGMSE5"
};

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        firebase.analytics();

        function writeData(){
            firebase.database.ref("user").set({
             nameOfTheItem: document.getElementById("whater the textbox is named").value,
             numberOfItems: "",
             isOpen: "",
             requester: "",
             numberCompleted: "",
            })

        }

        function getData(){

        }
        



        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');
}

export default Firebase;
