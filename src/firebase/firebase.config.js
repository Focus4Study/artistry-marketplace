// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPoQRVVOPNCRDiNIqCkfOaTTDB_HTrzX0",
  authDomain: "artistry-marketplace-7b3da.firebaseapp.com",
  projectId: "artistry-marketplace-7b3da",
  storageBucket: "artistry-marketplace-7b3da.appspot.com",
  messagingSenderId: "925456913971",
  appId: "1:925456913971:web:91aee8e43d58cfe4863546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app