import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBWBgecvsNdY8_WScJjN47ou060VQTCho0",
    authDomain: "albumes-facilito-react-532ad.firebaseapp.com",
    databaseURL: "https://albumes-facilito-react-532ad.firebaseio.com",
    projectId: "albumes-facilito-react-532ad",
    storageBucket: "albumes-facilito-react-532ad.appspot.com",
    messagingSenderId: "953861335926"
};

firebase.initializeApp(config);

export default firebase;