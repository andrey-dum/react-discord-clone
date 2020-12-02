import firebase from 'firebase'

// const API_KEY = process.env.FIREBASE_API_KEY;


const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "discord-clone-925c1.firebaseapp.com",
  databaseURL: "https://discord-clone-925c1.firebaseio.com",
  projectId: "discord-clone-925c1",
  storageBucket: "discord-clone-925c1.appspot.com",
  messagingSenderId: "767413798048",
  appId: "1:767413798048:web:780cab7267917f7b6df5c5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;