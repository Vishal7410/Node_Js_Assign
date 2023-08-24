const { log } = require("console");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subScribeMeassage = (channelName) => {
    console.log(`Thanks For Subscribing to ${channelName}`);

};
eventEmitter.addListener("subscribe", subScribeMeassage);
eventEmitter.emit("subscribe", "College Wallah");
