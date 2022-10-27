// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCG3_dT6yYfenUeTiLwkHDDPnCE1bNZIYs",
    authDomain: "asgn-client.firebaseapp.com",
    projectId: "asgn-client",
    storageBucket: "asgn-client.appspot.com",
    messagingSenderId: "368570220441",
    appId: "1:368570220441:web:939794e1a83f0fdd87dd08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;