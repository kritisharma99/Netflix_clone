//npm i firebase
// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC1iLXB4vagxUNNaoICt3fy4GpiYLPsPqI",
    authDomain: "netflix-clone-793e2.firebaseapp.com",
    projectId: "netflix-clone-793e2",
    storageBucket: "netflix-clone-793e2.appspot.com",
    messagingSenderId: "627167671386",
    appId: "1:627167671386:web:b14308fcec7ee747009463"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;