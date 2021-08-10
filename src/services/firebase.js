import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA6GMI3H3AEEKIQi_qALEgiSmJKAj80dYQ',
  authDomain: 'volleybase-e15b9.firebaseapp.com',
  databaseURL: 'https://volleybase-e15b9-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'volleybase-e15b9',
  storageBucket: 'volleybase-e15b9.appspot.com',
  messagingSenderId: '435501095161',
  appId: '1:435501095161:web:496c8b37481f2872a42a28'
};
firebase.initializeApp(config);
export const auth = firebase.auth();
