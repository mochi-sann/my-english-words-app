import firebase from "firebase/app";
import "firebase/auth"; // If you need it
import "firebase/firestore";

import "firebase/storage"; // If you need it

import "firebase/analytics"; // If you need it
// import "firebase/performance";

// import admin from "firebase-admin";

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

// export const db = firebase.firestore(); // If you need it
// firebase.analytics();
// export const analytics = firebase.analytics();
export const auth = firebase.auth();
//  loginGoogleProps

export const loginGoogle = (type: "google" | "github") => {
  // googleでログイン
  let provider: any = "";
  switch (type) {
    case "google":
      provider = new firebase.auth.GoogleAuthProvider();
      break;
    case "github":
      provider = new firebase.auth.GithubAuthProvider();
      break;
    default:
      break;
  }
  // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result: any) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      console.log(`user : ${JSON.stringify(user)} \n token ${token}`);
      console.log(result);

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

// Login状態の検知
export const listenAuthState = (dispatch: any) => {
  return firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      dispatch({
        type: "login",
        payload: {
          user,
        },
      });
    } else {
      // User is signed out.
      // ...
      dispatch({
        type: "logout",
      });
    }
  });
};

export const firebaseUser = () => {
  return firebase.auth().currentUser;
};

// Logout
export const logout = () => {
  auth.signOut().then(() => {
    window.location.reload();
  });
};

// DBを初期化
// const admin = require('firebase-admin');

// let serviceAccount = require('path/to/serviceAccountKey.json');

export const db = firebase.firestore();
