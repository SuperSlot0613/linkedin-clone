// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA9LOtb0WVJu9CuPnWjoKfWl8poem1zGSg",
    authDomain: "linkedin-clone-ebe34.firebaseapp.com",
    projectId: "linkedin-clone-ebe34",
    storageBucket: "linkedin-clone-ebe34.appspot.com",
    messagingSenderId: "736946603312",
    appId: "1:736946603312:web:e787ac202b1d6fd96a74f5",
    measurementId: "G-C1GKS2MB4V"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()

  export {db,auth}