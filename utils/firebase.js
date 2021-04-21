import firebase from "firebase/app";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAb1UFxlduLKH5s1bc0jJGDb2HS--Axdbg",
    authDomain: "fastclass-83523.firebaseapp.com",
    databaseURL: "https://fastclass-83523-default-rtdb.firebaseio.com",
    projectId: "fastclass-83523",
    storageBucket: "fastclass-83523.appspot.com",
    messagingSenderId: "292506853324",
    appId: "1:292506853324:web:b9b0b5ce18555d4da78769"
  };

firebase.initializeApp(firebaseConfig);

export { firebase } ;
