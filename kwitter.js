function adduser(){
 
    var user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user_name);

    window.location = "Fun_Chat_room.html";
}

function iconchange() {

    document.getElementById("user_icon").src="female ico.png";

}