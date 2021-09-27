import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB6yXiFAafnLJ97ye8_P9ZCpC7vNlPq2y0",
  authDomain: "charlescantin-74a56.firebaseapp.com",
  projectId: "charlescantin-74a56",
  storageBucket: "charlescantin-74a56.appspot.com",
  messagingSenderId: "730039163628",
  appId: "1:730039163628:web:649cf7fb975951de96a3c9",
  measurementId: "G-888EBW75SN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;