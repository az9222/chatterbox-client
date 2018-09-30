var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

//api keys
// $.ajaxPrefilter(function (settings, _, jqXHR) {
//   jqXHR.setRequestHeader('X-Parse-Application-Id', '2745f6eedad1770c6ebaf03f8a97cf0cc2f66706');
//   jqXHR.setRequestHeader('X-Parse-REST-API-Key', '4f44a6835e581124936858b658e8ea99e278d371');
// });

// // Put your campus prefix here
// window.CAMPUS = 'sfm6';
