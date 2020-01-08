import app from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASEKEY,
  authDomain: "ingredientslist-54af2.firebaseapp.com",
  databaseURL: "https://ingredientslist-54af2.firebaseio.com",
  projectId: "ingredientslist-54af2",
  storageBucket: "ingredientslist-54af2.appspot.com",
  messagingSenderId: "883980114826",
  appId: "1:883980114826:web:56a3dc7ff904211adb4673"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  signUpUser = (username, email, password) =>
    //   not sure where to create new user in mongodb with username and email
    this.auth.createUserWithEmailAndPassword(email, password);
  loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  signOutUser = () => this.auth.signOut();
  resetPassword = email => this.auth.sendPasswordResetEmail(email);
  updatePassword = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
