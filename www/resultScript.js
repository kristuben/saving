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
    database.ref(key).set({theVal : val});
  }
  function loadData(){
    //key is what the user entered as the hike ID
    /*var key = document.getElementById('idKey').value;
    var hikesRef = database.ref("hikes/" + key)
    hikesRef.once('value').then(function(snapshot){*/
  var key = document.getElementById('idKey').value;
  //TODO check if key even is a thing
  database.ref("hikes/" + key).once('value').then(function(snapshot){
    //json is the stored hike id
    var json = snapshot.val();
    var toBeDisplayed = "";
    var theLength =0;
    var theName = "";
    if (json != null){
      theLength = snapshot.val().length;
      theName = snapshot.val().name;
      theAddress = snapshot.val().address;
      theElevation = snapshot.val().elevation;
      toBeDisplayed = "success"
      //toBeDisplayed = snapshot.val().theVal;
    } else {
      toBeDisplayed = "Sorry, couldn't find that key :(";
    }
    document.getElementById('loadLength').innerHTML = "Length:" + theLength;
    document.getElementById('loadName').innerHTML = "Name of Hike: " + theName;
    document.getElementById('loadAddress').innerHTML = "Address:" + theAddress;
    document.getElementById('loadElevation').innerHTML = "Elevation" + theElevation;
  });
  }
  function chooseHikes() {

  }
  /*function loadData(){
  var key = document.getElementById('loadKey').value;
  database.ref(key).once('value').then(function(snapshot){
    var json = snapshot.val();
    var toBeDisplayed = "";
    if (json != null){
      toBeDisplayed = snapshot.val().theVal;
    } else {
      toBeDisplayed = "Sorry, couldn't find that key :(";
    }
    document.getElementById('loadValue').innerHTML = toBeDisplayed;
  });
}*/

/*function signIn(){
  var key = document.getElementById('loadKey').value;
  var pass = document.getElementById('loadVal').value;
  database.ref(key).once('value').then(function(snapshot){
    var json = snapshot.val();
    var toBeDisplayed = "";
    if (json != null) {
      var password = snapshot.val().theVal;
      if (password === pass){
        toBeDisplayed = "SUCCESS"
        window.location.href = "home.html"
      } else {
        toBeDisplayed = "WRONG PASSWORD"
      }
    } else {
      toBeDisplayed = "USERNAME NOT FOUND"
    }
    document.getElementById('loadValue').innerHTML = toBeDisplayed;
  });
}*/
