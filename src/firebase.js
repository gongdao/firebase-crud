import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyDMsNHb1JOoggWiEMuJ3Cho8D8h4bWyrmY",
	authDomain: "diary-cc40a.firebaseapp.com",
	databaseUrl: "https://diary-cc40a-default-rtdb.firebaseio.com",
	projectId: "diary-cc40a",
	storageBucket: "diary-cc40a.appspot.com",
	messagingSenderId: "591132687634",
	appId: "1:591132687634:web:0c50db3624d933aa0cc7cb",
	measurementId: "G-L37ZF51P7H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const database = firebase.database().ref("/notes");
