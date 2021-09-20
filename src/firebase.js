import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAQrHULfkhV6c3uUHlf7hIelidyggoMU5M",
    authDomain: "snapchat-clone-2d31d.firebaseapp.com",
    projectId: "snapchat-clone-2d31d",
    storageBucket: "snapchat-clone-2d31d.appspot.com",
    messagingSenderId: "7146410379",
    appId: "1:7146410379:web:084c50d9d1a4d5a1ef5f8e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };