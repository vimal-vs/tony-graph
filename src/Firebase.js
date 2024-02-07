import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCfX34GJkkr5TMBRgnufy283Y67tK6doIU",
    authDomain: "powermonitor-f4846.firebaseapp.com",
    databaseURL: "https://powermonitor-f4846-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "powermonitor-f4846",
    storageBucket: "powermonitor-f4846.appspot.com",
    messagingSenderId: "952265452719",
    appId: "1:952265452719:web:c7768642cf6148ff2ab85a"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;