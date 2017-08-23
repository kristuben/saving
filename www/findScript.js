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

function loadData(){
  database.ref("hikes").once('value').then(function(snapshot){
    var json = snapshot.val();
  });
}

function findHikes() {
  //does run
  var level = document.getElementById('theLevel').value;
  var region = document.getElementById('theRegion').value;
  sessionStorage.setItem("level", level);
  console.log("level: " + level)
  sessionStorage.setItem("region", region)
  console.log("region: " + region)
  window.location.href = "results.html"

//to access user's level: use sessionStorage.level
//to access user's region: use sessionStorage.region
}
