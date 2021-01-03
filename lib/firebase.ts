import firebase from "firebase/app";
import "firebase/auth"; // If you need it
import "firebase/firestore"; // If you need it
import "firebase/storage"; // If you need it
import "firebase/analytics"; // If you need it
import "firebase/performance";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export const db = firebase.firestore(); // If you need it

export const auth = firebase.auth();

export const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result: any) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const token = result.credential.accessToken;
      // The signed-in user info.
      // const user = result.user;

      console.log(`result : ${result}`);

      // ...
    })
    .catch(function (error) {
      console.log(error);

      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // const credential = error.credential;
      // ...
    });
};

export const logout = () => {
  auth.signOut().then(() => {
    window.location.reload();
  });
};
