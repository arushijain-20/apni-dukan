import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyB1naORSEi2Sx2GAP2bTYk7fYxNnU1-wAw",
  authDomain: "clone-88679.firebaseapp.com",
  projectId: "clone-88679",
  storageBucket: "clone-88679.appspot.com",
  messagingSenderId: "937242512467",
  appId: "1:937242512467:web:6473c0775753a974f20aa6",
  measurementId: "G-T507P9QEVC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();
export {db,auth};

