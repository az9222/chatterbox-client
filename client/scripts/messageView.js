//a html template for a single message.
//injection is when someone hijacks our HTML (cross-site scripting) and puts something we may not have wanted. The <%- prevents that.

// var template = _.template("Hello {{ name }}!");
// template({name: "Mustache"});
// => "Hello Mustache!"

var MessageView = {

  //add a ternary in the class that says if the username is a friend, underline it.
  render: _.template(`
      <div class="chat" id="<%- username %>">
        <div class="username"><%- username %></div>
        <div class="roomname"><%- roomname %></div>
        <div><%- text %></div>
      </div>
    `)

};