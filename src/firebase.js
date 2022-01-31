import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2LoIa-4dz7frGL8zzaPz1xyIBuVZdh2E",
    authDomain: "clone-fd766.firebaseapp.com",
    projectId: "clone-fd766",
    storageBucket: "clone-fd766.appspot.com",
    messagingSenderId: "148508861195",
    appId: "1:148508861195:web:74ad914e022f4175c8f80e",
    measurementId: "G-D1PVHTC3K2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };