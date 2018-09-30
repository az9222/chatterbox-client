var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  //when you click the #add-room button then it loads the render function
  initialize: function() {
    RoomsView.render();
    //click triggers a function
    var newRoom = RoomsView.$button.click(Rooms.addRoom);
  },

  //render always refers to how things are being display on the HTML side. Render is what we want to show. Will create option tags in the select id. 
  render: function() {
    //After you push a room in, we want to clear it so theres no duplicates
    RoomsView.$select.empty();
    var roomOptions = Rooms.collection;
    //for each room, we want to add an option tag to display in the selected rooms list to make a dropdown. Template takes in an object as parameter.
    for (var i = 0; i < roomOptions.length; i++) {
      var roomObj = {
        name: roomOptions[i],
        value: roomOptions[i]
      }
      var roomHTML = RoomsView.renderRoom(roomObj);
      //put the option tag in select
      RoomsView.$select.append(roomHTML);
    }
  },

  renderRoom: _.template(`
      <option class="roomname" value="<%- value %>"><%- name %></option>
    `)

};
