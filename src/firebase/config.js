import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBhfJwoFw17RJVI4XhadROCYDee-CtYkKQ",
    authDomain: "mymoney-f894c.firebaseapp.com",
    projectId: "mymoney-f894c",
    storageBucket: "mymoney-f894c.appspot.com",
    messagingSenderId: "392664010801",
    appId: "1:392664010801:web:5109d07c5b8e04373ac510"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }