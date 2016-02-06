
$(document).ready.(function(){
// var message = {
//   username: 'kat&liz',
//   text: 'hi everybody',
//   roomname: 'telegraphtearoom'
// };

//have an object named app
var app = {
roomName = undefined;
friendsList = {};
//metod on app called, init
init: function(){
  // app.createRoom();
  app.addMessages();
  // app.clearMessages();
  // }
},
},
//method on app called send
send: function(){
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'https://api.parse.com/1/classes/chatterbox',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  // dataType: "json",
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message');
  }
});
},

//method on app called fetch
fetch : function(){
  $.ajax({
  
   
  type: 'GET',
  data: JSON.stringify(),
  contentType: 'application/json',
  // dataType: "json",
  success: function (data) {
    console.log('chatterbox: Message received');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to receive message');
  }
});
},

clearMessages: function(){
//we'll set this up like a queue so only latest x number of messages are displayed
  $("#chats").empty();
},

addMessages: function(){
//write new messages
//take in message data
//call the send function we made to send message data to server
//connect this function to submit button so it fires upon button click
//if user enters a new roomname, it will auto add to dropdown menu
// app.send();
  $('#chatButton').on('click', function(){
    var message {};
    message.username = window.location.search.slice(10);
    message.text = $("#messageInput").val;
    message.roomname = app.roomName;
    app.send(message);
  });
},

createRoom: function(){
//display messages on DOM to make chat room
//call the fetch function so we can populate chat room with messages 
//grab room name property from user created message data
//compare room names, if unique new roomname
//remember to add in new room name to dropdown select
//make roomnames in dropdown clickable 
//"room" will correspond to all matching roomname properties from messages
app.fetch();
  $("#chats").append('<p>' + username + ': <br>' + message + '</p>');
  $('#createRoom').append('<p>' + roomName + '</p>');
},

enterRoom: function(){
//allow users to enter existing rooms
//select from dropdown menu
//when user clicks on room name, all messages with matching roomname value are displayed

},

addFriend: function(){
//make an empty user friend list
//click on username to add to friend list

},
showFriendMessages: function(){
//display all messages from users on friend list in bold 
},

app.init();
});