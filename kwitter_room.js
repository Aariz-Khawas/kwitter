
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCSoMFu7gL_bu8JshbCMhYVaRWMtSGF0nI",
      authDomain: "kwitter-2fdc6.firebaseapp.com",
      databaseURL: "https://kwitter-2fdc6-default-rtdb.firebaseio.com",
      projectId: "kwitter-2fdc6",
      storageBucket: "kwitter-2fdc6.appspot.com",
      messagingSenderId: "173384961469",
      appId: "1:173384961469:web:baa420937ed3935e5896d4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
};

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML+=row;
                  //End code
            });
      });
}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";

}
