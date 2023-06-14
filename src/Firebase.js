import React from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import "firebase/compat/firestore"




const app = firebase.initializeApp({

<<<<<<< HEAD
    apiKey: "AIzaSyCgXruWrn1iq3v1FW8wBQj8jfiiBPafgS0",
    authDomain: "genius-builder-80de2.firebaseapp.com",
    projectId: "genius-builder-80de2",
    storageBucket: "genius-builder-80de2.appspot.com",
    messagingSenderId: "683068244368",
    appId: "1:683068244368:web:b3d80574b2c111b43d3315"
=======
apiKey: "AIzaSyBjJ-t_U6ghISi6dTU8ZKF274pBDZADGZE",
  authDomain: "test-bb5a1.firebaseapp.com",
  projectId: "test-bb5a1",
  storageBucket: "test-bb5a1.appspot.com",
  messagingSenderId: "1090832818342",
  appId: "1:1090832818342:web:c03b1f099b753e3c505467"
>>>>>>> 7aa549b (New comits)


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