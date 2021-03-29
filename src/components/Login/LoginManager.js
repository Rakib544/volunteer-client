import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';

export const initializedApplication = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            updateUserInfo(name);
            // const userInfo = {}
            // userInfo.email = res.user.email;
            // userInfo.name = res.user.displayName;
            // userInfo.success = true;
            // return userInfo;
            return res
        })
        .catch(err => {
            // const user = {};
            // user.success = false;
            // user.error = err.message;
            // return user;
            return err.message
        })
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            // const userInfo = {}
            // userInfo.email = res.user.email;
            // userInfo.name = res.user.displayName;
            // userInfo.success = true;
            // return userInfo;
            return res;
        })
        .catch(err => {
            // const userInfo = {};
            // userInfo.success = false;
            // userInfo.error = err.message;
            // return userInfo
            return err
        })
}

const updateUserInfo = (name) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
    })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(googleProvider)
        .then(res => console.log(res.user))
        .catch(err => console.log(err))
}