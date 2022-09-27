// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSTSSiy30wqsgyHBtab9sZlff7jYA5Rm0",
  authDomain: "clone-361519.firebaseapp.com",
  projectId: "youtube-clone-361519",
  storageBucket: "youtube-clone-361519.appspot.com",
  messagingSenderId: "1014122402154",
  appId: "1:1014122402154:web:0c0aea5399d3d7374a9513",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
