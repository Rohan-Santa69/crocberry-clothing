import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA04Tl_pQBad02R0UlKxe8m1JQITM2FUtk",
    authDomain: "crocberry-db.firebaseapp.com",
    projectId: "crocberry-db",
    storageBucket: "crocberry-db.appspot.com",
    messagingSenderId: "155041750084",
    appId: "1:155041750084:web:671a80bb69d15878e47011"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;