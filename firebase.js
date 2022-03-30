import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDWj7BK9LygyDuMTCE8CW9eWn4KezqPzCk",
    authDomain: "rn-uber-eat-c449d.firebaseapp.com",
    projectId: "rn-uber-eat-c449d",
    storageBucket: "rn-uber-eat-c449d.appspot.com",
    messagingSenderId: "1091349496393",
    appId: "1:1091349496393:web:c234f1de9e8561ea167598"
  };
  
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;