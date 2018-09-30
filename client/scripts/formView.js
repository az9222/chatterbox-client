var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // event.preventDefault() will stop the browser from submitting the form so it doesn't redirect. When you submit the form, it defaults and thinks that an action will happen (be sent to a webpage) which is why we preventDefault.
    event.preventDefault();
    //Because the message parameter that Parse.create takes in is a message, I am going to create a message object
    var message = {
      username: App.username,
      text: $("#message").val(),
      roomname: RoomsView.$select.val()
    }
    // The first parameter of success callback in an AJAX call is data.
    function callback() {
      Parse.readAll(MessagesView.renderMessage)
    }
    //create a callback for Parse.create. The first thing it does is create the message and then reads it. 
    Parse.create(message, callback);
    //after you submit, clear the value
    $("#message").val("");
  },
  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};