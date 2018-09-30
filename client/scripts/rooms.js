var Rooms = {
    
    collection: ["Announcements", "Chatter", "Meetings", "Requests"],

    addRoom() {
        var newRoom = prompt("Add a room");
        //prevent duplicates
        if (Rooms.collection.includes(newRoom)) {
            alert("Room name already taken");
            //sends the prompt again
            Rooms.addRoom();
        } else {
          Rooms.collection.push(newRoom);
          //refresh the dropdown menu
          RoomsView.render();
        }
    },

    filterByRoom(roomname) {

    }
};

