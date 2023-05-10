import firebase from 'firebase/app';
import 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyCxAUI_1V2tW9nu0YdyEa7UFddmSQsAtqk",
    authDomain: "blog-ef473.firebaseapp.com",
    projectId: "blog-ef473",
    storageBucket: "blog-ef473.appspot.com",
    messagingSenderId: "963828711356",
    appId: "1:963828711356:web:2aace0e804dd8f338ff5b9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();