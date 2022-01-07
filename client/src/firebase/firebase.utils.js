import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const config = {
	apiKey: "AIzaSyDezgLN163IDtIJ2AHqawgNW0XuWrc9rKA",
	authDomain: "storm-skate-co.firebaseapp.com",
	projectId: "storm-skate-co",
	storageBucket: "storm-skate-co.appspot.com",
	messagingSenderId: "430338643834",
	appId: "1:430338643834:web:c85848ba24a9e11835e8c3",
	measurementId: "G-98TBLFL97S",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;
