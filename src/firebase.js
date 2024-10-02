// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCkAT00kdxc40LQGefLTtpZaWau8_j0EEU",
//   authDomain: "myproject-323ca.firebaseapp.com",
//   databaseURL: "https://myproject-323ca-default-rtdb.firebaseio.com",
//   projectId: "myproject-323ca",
//   storageBucket: "myproject-323ca.appspot.com",
//   messagingSenderId: "708614833082",
//   appId: "1:708614833082:web:66723cae4f2ed0c104d383",
//   // databaseURL:"https://myproject-323ca-default-rtdb.firebaseio.com"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCkAT00kdxc40LQGefLTtpZaWau8_j0EEU",
  authDomain: "myproject-323ca.firebaseapp.com",
  projectId: "myproject-323ca",
  storageBucket: "myproject-323ca.appspot.com",
  messagingSenderId: "708614833082",
  appId: "1:708614833082:web:66723cae4f2ed0c104d383",
  databaseURL:"https://myproject-323ca-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);