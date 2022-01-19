import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// import { getDownloadURL, getStorage, ref } from "firebase/storage";

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

export const downloadFiles = async (imageRef) => {
	let alreadyFetched = imageRef.includes("firebase");

	if (alreadyFetched) {
		return imageRef;
	}

	// FIRST TRY
	const storageRef = storage.ref();
	// console.log("storageRef = ", storageRef);
	// console.log("storageRef child = ", storageRef.child(imageRef));
	return await storageRef
		.child(imageRef)
		.getDownloadURL()
		.then((url) => {
			console.log("url", url);
			// imageUrlRef.current = imageUrl;
			return url;
		})
		.catch((error) => {
			switch (error.code) {
				case "storage/object-not-found":
					// File doesn't exist
					console.log("Error Code:", error.code);
					break;
				case "storage/unauthorized":
					// User doesn't have permission to access the object
					console.log("Error Code:", error.code);
					break;
				case "storage/canceled":
					// User canceled the upload
					console.log("Error Code:", error.code);
					break;
				case "storage/unknown":
					// Unknown error occurred, inspect the server response
					console.log("Error Code:", error.code);
					break;
				default:
					break;
			}
		});
	// SECOND TRY
	// const getTheStorage = getStorage();
	// const imgRef = ref(storage, imageRef);
	// getDownloadURL(imgRef)
	// 	.then((url) => {
	// 		console.log
	// 		return url;
	// 	})
	// 	.catch((error) => {
	// 		// A full list of error codes is available at
	// 		// https://firebase.google.com/docs/storage/web/handle-errors
	// 		switch (error.code) {
	// 			case "storage/object-not-found":
	// 				// File doesn't exist
	// 				break;
	// 			case "storage/unauthorized":
	// 				// User doesn't have permission to access the object
	// 				break;
	// 			case "storage/canceled":
	// 				// User canceled the upload
	// 				break;
	// 			// ...
	// 			case "storage/unknown":
	// 				// Unknown error occurred, inspect the server response
	// 				break;
	// 			default:
	// 				console.log("defaulted");
	// 		}
	// 	});
};

export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
