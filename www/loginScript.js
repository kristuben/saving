// Initialize Firebase
//session storage: key "username", value "lollipop913"
  var config = {
    apiKey: "AIzaSyD_TcHQbDLNKufbovGO-1Ij9AUoCQwOufE",
    authDomain: "takeahike-86d41.firebaseapp.com",
    databaseURL: "https://takeahike-86d41.firebaseio.com",
    projectId: "takeahike-86d41",
    storageBucket: "takeahike-86d41.appspot.com",
    messagingSenderId: "660810891875"
  };
  firebase.initializeApp(config);

  //to use database (storing data, not files)
  var database = firebase.database();

  function storeData(){
    var key = document.getElementById('key').value;
    var val = document.getElementById('value').value;
    var toBeDisplayed = "";
    if ((key != "") && (val != "")) {
      database.ref("users/" + key).set({password : val});
      toBeDisplayed = "";
      window.location.href = "index.html";
    } else {
      //fill out all fields!
      toBeDisplayed = "Please fill out all fields.";
    }
    document.getElementById('message').innerHTML = toBeDisplayed;
  }

  function signIn(){
    var key = document.getElementById('loadKey').value;
    var pass = document.getElementById('loadVal').value;
    console.log(pass);
    database.ref("users/" + key).once('value').then(function(snapshot){
      var json = snapshot.val();
      var toBeDisplayed = "";
      if (json != null) {
        var password = snapshot.val().password;
        if (password === pass){
          toBeDisplayed = "SUCCESS";
          sessionStorage.setItem("username", key);
          window.location.href = "home.html";
        } else {
          toBeDisplayed = "WRONG PASSWORD";
        }
      } else {
        toBeDisplayed = "USERNAME NOT FOUND";
      }
      document.getElementById('loadValue').innerHTML = toBeDisplayed;
    });
  }
