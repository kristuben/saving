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


function findInputInDB(){
  var level = sessionStorage.level;
  console.log(level);
  var region = sessionStorage.region;
  console.log(region);
  str = "";

  database.ref("hikes").once('value').then(function(snapshot){
    var hikes = snapshot.val();
    //console.log(hikes);

    for (var hikeid in hikes){
      //console.log(hikeid);
    //console.log(hikes[hikeid]);
      if (hikes[hikeid].skill == level && hikes[hikeid].region == region){
          str = str + hikeid + " ";
          addToPage(hikes, hikeid);
      }
    }
    console.log(str)
  });
}

/*function loadData(id){
  //key is what the user entered as the hike ID
  var key = document.getElementById('idKey').value;
  var hikesRef = database.ref("hikes/" + key)
  hikesRef.once('value').then(function(snapshot){
var key = id;
console.log(key)
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
    toBeDisplayed = "success"
    //toBeDisplayed = snapshot.val().theVal;
  } else {
    toBeDisplayed = "Sorry, couldn't find that key :(";
  }
  document.getElementById('loadLength').innerHTML = "Length:" + theLength;
  document.getElementById('loadName').innerHTML = "Name of Hike: " + theName;
});
}*/

function addToPage(listOfHikes, id) {
  /*var stuffToAdd = listOfHikes;
  for (var i = 0; i < stuffToAdd.length; i++){
    var thing = stuffToAdd[i];
    var paragraph = document.createElement("p");
    paragraph.innerHTML = thing;
    var container = document.getElementById("container");
    container.appendChild(paragraph);
  }*/
  var theDiv = document.createElement("div");
  var paragraph = document.createElement("p");
  var paragraph2 = document.createElement("p");
  var paragraph3 = document.createElement("p");
  var paragraph4 = document.createElement("p");
  var favorite = document.createElement("button");
  var image = document.createElement("img");

  var username = sessionStorage.username;

  favorite.className = "theButton";
  theDiv.className = "divThing";


  /*paragraph.class = "result";
  paragraph2.class = "result";
  paragraph3.class = "result";
  paragraph4.class = "result";*/
  favorite.innerHTML = "Add to My Hikes"
  favorite.onclick = function(){
    console.log(username);
    database.ref("users/" + username + "/favorites/" + id).set({theName : listOfHikes[id].name});
    console.log("added");
    favorite.innerHTML = "ADDED";
  };
  paragraph.innerHTML = "Name: " + listOfHikes[id].name;
  paragraph2.innerHTML = "Length: " + listOfHikes[id].length;
  paragraph3.innerHTML = "Address: " + listOfHikes[id].address;
  paragraph4.innerHTML = "Elevation: " + listOfHikes[id].elevation;
  paragraph.setAttribute("style","position:relative;top:-15px;")
  paragraph2.setAttribute("style","position:relative;top:-15px;")
  paragraph3.setAttribute("style","position:relative;top:-15px;")
  paragraph4.setAttribute("style","position:relative;top:-15px;")
  image.src = listOfHikes[id].pic;
  image.setAttribute("width","375px");
  image.setAttribute("style","position:relative;left:620px;top:-150px;");
  favorite.setAttribute("display", "inline-block");
  favorite.setAttribute("width", "250px");
  favorite.setAttribute("style","position:relative;left:10px;top:-40px;");


/*  padding: 15px 18px;
  color: white;
  border: 1.5px solid white;
  text-align: center;
  outline: none;
  text-decoration: none;
  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;
  border-radius: 20px;
  font-size: 20px;
  font-family: "Comfortaa", cursive;
  margin: 4px 2px;*/
  /*theDiv.setAttribute("font-family", "Comfortaa", cursive);
  theDiv.setAttribute("color", "white");*/


  console.log(listOfHikes[id].pic)
  var container = document.getElementById("container");
  theDiv.appendChild(paragraph);
  theDiv.appendChild(paragraph2);
  theDiv.appendChild(paragraph3);
  theDiv.appendChild(paragraph4);
  theDiv.appendChild(image);
  theDiv.appendChild(favorite);

  container.appendChild(theDiv);

   /*
   if they click the button {
      add it to favorites under user
    }
    */
}
