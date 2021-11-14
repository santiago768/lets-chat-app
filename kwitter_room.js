var  firebaseConfig = {
    apiKey: "AIzaSyC-wX3ftu4Bv-OBsv3eEhI-_fnbW5YWR1I",
    authDomain: "kwitter-b2af7.firebaseapp.com",
    databaseURL: "https://kwitter-b2af7-default-rtdb.firebaseio.com",
    projectId: "kwitter-b2af7",
    storageBucket: "kwitter-b2af7.appspot.com",
    messagingSenderId: "819088981850",
    appId: "1:819088981850:web:6ca75d02e1c03d01c4fd63"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  
  
  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
  
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        main_folder_name = childKey;
        row='<div class="room_name" onclick="redirect(this.id)" id="'+main_folder_name+'">'+main_folder_name+'</div><hr>';
        document.getElementById("output").innerHTML+=row;
      });
    });
  
  }
  
  getData();
  function addRoom(){
    room_name=document.getElementById("room_name").value;
    localStorage.setItem("room_namekey",room_name)
    firebase.database().ref("/").child(room_name).update({
      purpose:"room created"
    });
    window.location="kwitter_room.html";
  }
  function redirect(room_id){
    localStorage.setItem("room_namekey",room_id);
    window.location="kwitter_romm.html";
  }