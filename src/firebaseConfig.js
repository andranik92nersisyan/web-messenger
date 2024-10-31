import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBpnj81vgnB5Y7POtqkVzEMq2cdEVmcpoo",
  authDomain: "web-messeger-f1be1.firebaseapp.com",
  projectId: "web-messeger-f1be1",
  storageBucket: "web-messeger-f1be1.appspot.com",
  messagingSenderId: "233554890055",
  appId: "1:233554890055:web:e62181add3f3fbea625062",
  measurementId: "G-8TWER3D2EB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);