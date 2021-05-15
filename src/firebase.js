// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1SEKtPO5drqW4VTNVnEtU74wsRm6wEtU",
  authDomain: "whatsapp-clone-4bd92.firebaseapp.com",
  projectId: "whatsapp-clone-4bd92",
  storageBucket: "whatsapp-clone-4bd92.appspot.com",
  messagingSenderId: "175474543371",
  appId: "1:175474543371:web:d91c06a19b8b85e36fb00e",
  measurementId: "G-H063GJ2B2Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
