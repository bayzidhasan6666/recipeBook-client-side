// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCePOZT5kff6eL0bfBY_VtV4cefU_qYaYQ',
  authDomain: 'chef-recipe-hunter-acd1b.firebaseapp.com',
  projectId: 'chef-recipe-hunter-acd1b',
  storageBucket: 'chef-recipe-hunter-acd1b.appspot.com',
  messagingSenderId: '825718718476',
  appId: '1:825718718476:web:9bb00b2897f456bed86e29',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
