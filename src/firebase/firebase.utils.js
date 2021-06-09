import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAn1CToy57fNLbFlWijRQKMKl0fs9iZ0As",
    authDomain: "crwn-db-5892e.firebaseapp.com",
    databaseURL: "https://crwn-db-5892e-default-rtdb.firebaseio.com",
    projectId: "crwn-db-5892e",
    storageBucket: "crwn-db-5892e.appspot.com",
    messagingSenderId: "876786602814",
    appId: "1:876786602814:web:c377f4be3a51c1592e126f",
    measurementId: "G-16W8E73QJG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;