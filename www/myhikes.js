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

function displayfavorites(){
  var username = sessionStorage.username;
  //var toBeDisplayed = "";
  var contain = document.getElementById("element");
  database.ref("users/" + username + "/favorites").once('value').then(function(snapshot){
    var favorites = snapshot.val();
    console.log(favorites);
    for (hike in favorites) {
        var display = document.createElement("p");
        display.innerHTML = favorites[hike].theName;
        contain.appendChild(display);
        //toBeDisplayed = toBeDisplayed + favorites[hike].theName;
    }


    //document.getElementById('loadValue').innerHTML = toBeDisplayed;
 });
}
