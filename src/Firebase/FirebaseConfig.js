// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCfaeVzCS6qkP-GrwTggcUtlFc2ZlKONSc',
  authDomain: 'memo-game-ht.firebaseapp.com',
  projectId: 'memo-game-ht',
  storageBucket: 'memo-game-ht.appspot.com',
  messagingSenderId: '1088695823575',
  appId: '1:1088695823575:web:b5f1ba67e5d4e56c419492',
  measurementId: 'G-2RXESJMW7R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
