import * as firebase from 'firebase/app'
import "firebase/auth";

var config = {
    apiKey: "AIzaSyD81klt2BJXJs8S7u02rRKkl_148oWevNs",
    authDomain: "stock-tracker-d5b73.firebaseapp.com",
    databaseURL: "https://stock-tracker-d5b73.firebaseio.com",
    projectId: "stock-tracker-d5b73",
    storageBucket: "stock-tracker-d5b73.appspot.com",
    messagingSenderId: "580495898045"
  };

firebase.initializeApp(config);

const Firestore = firebase.firestore()

export default Firestore