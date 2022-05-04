importScripts("https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.3.0/firebase-messaging.js");

firebase.initializeApp(
    {
        apiKey: "AIzaSyA7098NZhk35lcOrYTXF2HmTW_v76XtqRo",
        authDomain: "epical-ecb7f.firebaseapp.com",
        databaseURL: "https://epical-ecb7f-default-rtdb.firebaseio.com",
        projectId: "epical-ecb7f",
        storageBucket: "epical-ecb7f.appsport.com",
        messagingSenderId: "1066683181268",
        appId: "1:1066683181268:web:76f7c9c1196d32f24e7341"
      }
)
const messaging= firebase.messaging();