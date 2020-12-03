import firebase from 'firebase'

// const API_KEY = process.env.FIREBASE_API_KEY;


const firebaseConfig = {
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;