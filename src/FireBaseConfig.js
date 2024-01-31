// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getAuth ,GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBjoKSBiHbBIn3HvNKTyP9rWJvsFgB_IAE",
  authDomain: "resume-builder-44e2c.firebaseapp.com",
  projectId: "resume-builder-44e2c",
  storageBucket: "resume-builder-44e2c.appspot.com",
  messagingSenderId: "602623815978",
  appId: "1:602623815978:web:d3e38761b52167b41f6e53",
  measurementId: "G-LK88TQ2765"
};


const app = firebase.initializeApp(firebaseConfig);
export const  auth = getAuth(app);
export const provider=new GoogleAuthProvider();


export default app;