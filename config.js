import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAiCbm4trSvUr4UDSabkKBSa66xAF73L54",
  authDomain: "storyhub2-6dcec.firebaseapp.com",
  databaseURL: "https://storyhub2-6dcec-default-rtdb.firebaseio.com",
  projectId: "storyhub2-6dcec",
  storageBucket: "storyhub2-6dcec.appspot.com",
  messagingSenderId: "20438101305",
  appId: "1:20438101305:web:527fa3cdb018cd1dadcce8"
};

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();