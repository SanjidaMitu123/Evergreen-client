// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdI08SuKyX6zHMlit5HddVeQk6smA0D8U",
  authDomain: "vanilla-eventworks.firebaseapp.com",
  projectId: "vanilla-eventworks",
  storageBucket: "vanilla-eventworks.appspot.com",
  messagingSenderId: "231813564575",
  appId: "1:231813564575:web:eaa722e2e51488369cbaaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;