// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxU-LEsWBcbIHCdvX2_u_UxjxoYmWKWrA",
  authDomain: "my-genius-car.firebaseapp.com",
  projectId: "my-genius-car",
  storageBucket: "my-genius-car.appspot.com",
  messagingSenderId: "469224736402",
  appId: "1:469224736402:web:1ce417348c02db0eef084b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;