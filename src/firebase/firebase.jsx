import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyB78z45MB0Wtob2oOI6FBtF22HfUOyzlKI",
    authDomain: "authentication-f7b9c.firebaseapp.com",
    databaseURL: "https://authentication-f7b9c-default-rtdb.firebaseio.com",
    projectId: "authentication-f7b9c",
    storageBucket: "authentication-f7b9c.appspot.com",
    messagingSenderId: "381770587367",
    appId: "1:381770587367:web:3fc7b78ec3b253c8dd5642",
    measurementId: "G-B4KXKTVVYE"


    
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   export var auth=firebase.auth();
   export var firestore=firebase.firestore();
   export var Googleauthprovider=new firebase.auth.GoogleAuthProvider();
   export var serverTimestamp=()=>firebase.firestore.FieldValue.serverTimestamp();
   export var storage=firebase.storage().ref();
   export default firebase;