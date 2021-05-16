import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDge5CeQ7lOmxIXwzjYaOZDADNRoAkEjP8",
    authDomain: "react-login-7be62.firebaseapp.com",
    projectId: "react-login-7be62",
    storageBucket: "react-login-7be62.appspot.com",
    messagingSenderId: "908518574193",
    appId: "1:908518574193:web:36b7335f767eb5de07b3d0"
  };
  
  const fire =firebase.initializeApp(firebaseConfig);

  export default fire;