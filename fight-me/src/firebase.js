// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1dnQiNtudyWx19kOEP019VwHvIe153Ow",
  authDomain: "fightme-52fdb.firebaseapp.com",
  projectId: "fightme-52fdb",
  storageBucket: "fightme-52fdb.appspot.com",
  messagingSenderId: "396995706929",
  appId: "1:396995706929:web:386cde032a0f7297669510",
  measurementId: "G-RK79Q08K7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = app.firestore();

export default database;
