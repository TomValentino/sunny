import React from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import "firebase/compat/firestore"




const app = firebase.initializeApp({
    
    apiKey: "AIzaSyBjJ-t_U6ghISi6dTU8ZKF274pBDZADGZE",
    authDomain: "test-bb5a1.firebaseapp.com",
    projectId: "test-bb5a1",
    storageBucket: "test-bb5a1.appspot.com",
    messagingSenderId: "1090832818342",
    appId: "1:1090832818342:web:c03b1f099b753e3c505467"


})

export const firestore = app.firestore()






export const database = {
    folders: firestore.collection('saved-dash-text'),
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
}


export const addNew = {
    folders: firestore.collection(localStorage.getItem('user') + ' - test'),
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
}







export const auth = app.auth()
export default app