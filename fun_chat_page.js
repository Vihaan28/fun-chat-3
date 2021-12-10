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
  var room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){

      var msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({

   name:user_name , 
   message:msg,
   like:0

      });

      document.getElementById("msg").value="";

}

function logout(){

      window.location = "index.html";
      
      localStorage.removeItem("user_name");

      localStorage.removeItem("room_name");
}


