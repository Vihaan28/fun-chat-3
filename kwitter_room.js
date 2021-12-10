var firebaseConfig = {
      apiKey: "AIzaSyBMAvXrF6mbyJVc1lx15cgU4TqswhnQEU0",
      authDomain: "fun-chat-35d86.firebaseapp.com",
      databaseURL: "https://fun-chat-35d86-default-rtdb.firebaseio.com",
      projectId: "fun-chat-35d86",
      storageBucket: "fun-chat-35d86.appspot.com",
      messagingSenderId: "730572073242",
      appId: "1:730572073242:web:c1bef2cc2622510bfea4a3"
    };
firebase.initializeApp(firebaseConfig);

  var user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! " ;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
var row = "<div class = 'room_name'id=" + Room_names + "onclick='toroomname(this.id)' > #" +Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;  
      //End code
      });});}
getData();

function toroomname (name)
{

      console.log(name);
      localStorage.setitem("room_name" , name);
      window.location = "fun_chat_page.html";
}

function addroom()
{

var room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({

      purpose : "adding room name "
});

localStorage.setItem("room_name" , room_name);

window.location = "fun_chat_page.html";

}

function logout(){

      window.location = "index.html";
      
      localStorage.removeItem("user_name");

      localStorage.removeItem("room_name");
}