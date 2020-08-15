import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAsbSQTYFZJiDUQCQ2ek680zz_YS_oq4mc",
  authDomain: "slack-clone-5f7df.firebaseapp.com",
  databaseURL: "https://slack-clone-5f7df.firebaseio.com",
  projectId: "slack-clone-5f7df",
  storageBucket: "slack-clone-5f7df.appspot.com",
  messagingSenderId: "494012145577",
  appId: "1:494012145577:web:bc0000c487f2482052eeb8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
