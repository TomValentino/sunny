import React from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import "firebase/compat/firestore"




const app = firebase.initializeApp({

    apiKey: "AIzaSyCgXruWrn1iq3v1FW8wBQj8jfiiBPafgS0",
    authDomain: "genius-builder-80de2.firebaseapp.com",
    projectId: "genius-builder-80de2",
    storageBucket: "genius-builder-80de2.appspot.com",
    messagingSenderId: "683068244368",
    appId: "1:683068244368:web:b3d80574b2c111b43d3315"


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