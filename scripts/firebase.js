  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyDW2_Ln3CaiD2M47oxSjVRHcpzHBjU7RQ0",
      authDomain: "online-shopping-27c1f.firebaseapp.com",
      projectId: "online-shopping-27c1f",
      storageBucket: "online-shopping-27c1f.appspot.com",
      messagingSenderId: "518979191044",
      appId: "1:518979191044:web:f7943af43b0a7fa5a31051",
      measurementId: "G-KK8Q37Q5PG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();