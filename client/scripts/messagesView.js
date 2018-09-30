//render many message view
var MessagesView = {

  $chats: $('#chats'),

  //when the page loads, make a call to the server parse read and then we render (aka load it) and the spinner stops
  initialize: function() {
    Parse.readAll(MessagesView.renderMessage);
    App.stopSpinner();
    Friends.selectFriend();
  },

  //shows actual messages. Uses a for loop to go through each object and create a message instance and then append to the body
  renderMessage: function(data) {
    //empty out the section and bring out a fresh one to clear out duplicates
    MessagesView.$chats.empty()
    for (var i = 0; i < data.results.length; i++) {
      var newMessage = new Message (data.results[i]);
      var newMessageObj = newMessage.getMessageObject();
      var newMessageHTML = MessageView.render(newMessageObj)
      MessagesView.$chats.append(newMessageHTML);
    }
  }

};