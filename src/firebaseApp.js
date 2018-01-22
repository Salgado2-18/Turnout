import firebase from 'firebase'
// Initialize Firebase
const config = {
  apiKey: "AIzaSyBGm991gjI14XTjWnd4wQCuftLYleP2Rug",
  authDomain: "turnout-debb3.firebaseapp.com",
  databaseURL: "https://turnout-debb3.firebaseio.com",
  projectId: "turnout-debb3",
  storageBucket: "turnout-debb3.appspot.com",
  messagingSenderId: "815864182940"
};
export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebase.database().ref().child('events')
