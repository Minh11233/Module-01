// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOTa0mtGLRRjRORRAdIS-RA1c24IZKUrE",
  authDomain: "minhgame-snake.firebaseapp.com",
  projectId: "minhgame-snake",
  storageBucket: "minhgame-snake.appspot.com",
  messagingSenderId: "102392007466",
  appId: "1:102392007466:web:e27cfbd13d1d1ff812ec53",
  measurementId: "G-MNSYEM4XYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);