 class Message {
    constructor(data) {
        //have a default for username since not every object has all of this data. This is a data-clean and for safe coding.
        this.username = data.username || "User";
        this.text = data.text || "N/A";
        this.roomname = data.roomname || "N/A";
    }

    getMessageObject() {
        return {
            text: this.text,
            username: this.username,
            roomname: this.roomname
        }
    }
};