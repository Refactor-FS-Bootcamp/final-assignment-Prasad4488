import firebase from 'firebase' 

const firebaseConfig = {
  apiKey: "AIzaSyCVkyap3bZBaV3C10X4inxl0zmxXkDzRhE",
  authDomain: "mail-app-83382.firebaseapp.com",
  projectId: "mail-app-83382",
  storageBucket: "mail-app-83382.appspot.com",
  messagingSenderId: "360234169179",
  appId: "1:360234169179:web:74a1bd2c8c7a3f5d58207e"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export { db,auth,provider }