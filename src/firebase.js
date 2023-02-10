import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXX68_AyjXTFsIWQQQHwmpduEbAfyRI7A",
    authDomain: "clone-492f4.firebaseapp.com",
    projectId: "clone-492f4",
    storageBucket: "clone-492f4.appspot.com",
    messagingSenderId: "149965666287",
    appId: "1:149965666287:web:87492dd899b27c1cd2e81a",
    measurementId: "G-T6SM9R744T"
};

const fireBaseApp = firebase.initializeApp(firebaseConfig)
const db = fireBaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };