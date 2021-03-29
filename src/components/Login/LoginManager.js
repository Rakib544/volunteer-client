import firebase from 'firebase';
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
            const user = {};
            user.success = true;
            user.error = '';
            return user;
        })
        .catch(err => {
            const user = {};
            user.success = false;
            user.error = err.message;
            return user;
        })
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
        const userInfo = {}
        userInfo.email = res.user.email;
        userInfo.name= res.user.displayName;
        userInfo.success = true;
        return userInfo;
    })
    .catch(err => {
        const userInfo = {};
        userInfo.error = err.message;
        return userInfo
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