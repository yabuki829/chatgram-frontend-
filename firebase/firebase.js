import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase,ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBWDj5cEG3WLd3VhsggSBv3SKL4_lCs3S0",
    authDomain: "chatgram-89019.firebaseapp.com",
    projectId: "chatgram-89019",
    storageBucket: "chatgram-89019.appspot.com",
    messagingSenderId: "1057254739564",
    appId: "1:1057254739564:web:37e7b78e259893bbc65249",
    measurementId: "G-SX64D3E4X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// getAnalytics(app); // アナリティクスは初期化されているが、変数に割り当てられていない

// Realtime Databaseの取得
const database = getDatabase(app, "https://chatgram-89019-default-rtdb.asia-southeast1.firebasedatabase.app");


export { database };
