import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDo5UUe86THOjczUA3ewsshEgFlLVmpj2E",
    authDomain: "new-project-96176.firebaseapp.com",
    databaseURL: "https://new-project-96176.firebaseio.com",
    projectId: "new-project-96176",
    storageBucket: "new-project-96176.appspot.com",
    messagingSenderId: "540402281342",
    appId: "1:540402281342:web:d63d977d86ca18d829e12f",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

export { projectStorage };
