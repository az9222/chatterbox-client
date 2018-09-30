var Friends = {
    
    friendArray: [],

    selectFriend() {
        //when you click the div it triggers addFrined
        $(document).on("click", ".chat", Friends.handleFriend);
    },

    removeFriend(friendName) {
        alert(`${friendName} is no longer your friend!`);
        $(".chat").each(function(){
            if (Friends.friendArray.includes(this.id)) {
                $(this).removeClass('friend')
            }
        })
        Friends.friendArray.splice(Friends.friendArray.indexOf(friendName), 1);
        console.log(Friends.friendArray)
    },

    //friendName is event.currentTarget.id
    addFriend(friendName) {
        //we get an alert that says ${username} is now your friend and it pushes it into the friend array
        //event.target is like the specific elements in a div like username, roomname etc. but if we do event.target, we might sometimes get name or roomname etc. if we do currenttarget, it does the whole chat div (it listens to what are click is specifying on)
        alert(`${friendName} is now your friend! All friends will be blue.`);
        Friends.friendArray.push(friendName);
        //get all of the chat class element. "THIS" refers to each element in the list for 'each'
        $(".chat").each(function(){
            if (Friends.friendArray.includes(this.id)) {
                $(this).addClass('friend')
            }    
        })
    },

    handleFriend(event) {
        //if the array includes the event already
        if (Friends.friendArray.includes(event.currentTarget.id)) {
            Friends.removeFriend(event.currentTarget.id);
        } else {
            //remove friend otherwise addFriend
            Friends.addFriend(event.currentTarget.id);
        }
    },

};
