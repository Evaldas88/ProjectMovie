import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Lj-O7cz6wAVQWEXoQvOS4CNs3JedaCs",
  authDomain: "fir-auth-c49ef.firebaseapp.com",
  projectId: "fir-auth-c49ef",
  storageBucket: "fir-auth-c49ef.appspot.com",
  messagingSenderId: "455962427612",
  appId: "1:455962427612:web:390b65481715f4ddae7419"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// Get the Auth object from the Firebase app
const auth = firebase.auth();

export { auth };
