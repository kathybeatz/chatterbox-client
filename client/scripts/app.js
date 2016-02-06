

var message = {
  username: 'kat&liz',
  text: 'hi everybody',
  roomname: 'telegraphtearoom'
};

//have an object named app
var app = {


//metod on app called, init
init: function(){
  
},

//method on app called send
send: function(message){

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
  $("#chats").empty();
},

addMessages: function(message){
  $("#chats").append('<p>' + message + '</p>');
},

createRoom: function(){
  //remember to add in new room name to dropdown select
  $('#createRoom').append('<p>' + roomName + '</p>');
},

enterRoom: function(){

},

addFriend: function(){

},
};
app.addMessages(message);