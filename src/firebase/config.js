import firebase from "firebase";
import "firebase/storage";

// Replace this object with your firebase credentials
const firebaseConfig = {
    apiKey: "AIzaSyDlZSF9l7LoiuNAFMg5SDnjOUXCnJIv2dQ",
    authDomain: "new-project-bf199.firebaseapp.com",
    databaseURL: "https://new-project-bf199.firebaseio.com",
    projectId: "new-project-bf199",
    storageBucket: "new-project-bf199.appspot.com",
    messagingSenderId: "1023630582426",
    appId: "1:1023630582426:web:d2a8b87d3bad2643427523",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

export { projectStorage };
