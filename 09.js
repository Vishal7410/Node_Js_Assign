const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subScribeMeassage = (channelName) => {
    console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subScribeMeassage)

console.log("Calling event listner before removing the event.");
eventEmitter.emit("subscribe", "College Wallah");
