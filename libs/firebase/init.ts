// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: process.env.APIKEY,
// 	authDomain: process.env.AUTHDOMAIN,
// 	storageBucket: process.env.STORAGEBUCKET,
// 	messagingSenderId: process.env.MESSAGINGSENDERID,
// 	appId: process.env.APPID,
// 	projectId: "lineoa-de21f",
// };

// // for Future data base
// const firebaseConfig = {
// 	apiKey: "AIzaSyB910KRQeMPuRsn1-57nEmpTpCT0gZVtdY",
// 	authDomain: "myfuture-ffd67.firebaseapp.com",
// 	databaseURL: "https://myfuture-ffd67-default-rtdb.firebaseio.com",
// 	projectId: "myfuture-ffd67",
// 	storageBucket: "myfuture-ffd67.appspot.com",
// 	messagingSenderId: "120269499926",
// 	appId: "1:120269499926:web:f7f901d695fbf4d11ecf37",
// 	measurementId: "G-XRZCFVWGES",
// };

// LineOA Database
const firebaseConfig = {
	apiKey: "AIzaSyB0gX01lN2Igcg655t2yeGTsBrFOtSVHc0",
	authDomain: "lineoa-de21f.firebaseapp.com",
	projectId: "lineoa-de21f",
	storageBucket: "lineoa-de21f.appspot.com",
	messagingSenderId: "1011967970015",
	appId: "1:1011967970015:web:f0d935ad7556edb163376a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
