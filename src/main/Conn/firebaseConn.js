import firebase from 'firebase';

const config = {
        apiKey: "AIzaSyA1iVPIgmUxZqJKYesMRSSRPjRQcFy8elk",
        authDomain: "blogcolegiohms.firebaseapp.com",
        databaseURL: "https://blogcolegiohms.firebaseio.com",
        projectId: "blogcolegiohms",
        storageBucket: "blogcolegiohms.appspot.com",
        messagingSenderId: "367654264016",
        appId: "1:367654264016:web:21f84b3258c74687"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();