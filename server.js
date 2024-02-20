const { RTMClient,LogLevel } = require("@slack/rtm-api");
const {WebClient}=require("@slack/web-api")
const dotenv = require("dotenv");
dotenv.config();

const rtm = new RTMClient(process.env.SLACK_OATH_TOKEN);
const web = new WebClient(process.env.SLACK_OATH_TOKEN)


rtm.start().catch(console.error)

rtm.on("message", async (event) => {
    try {    
        let channel =  event.channel;
        console.log(channel, "channel");
        let text = event.text;
        console.log("Bot started", channel);
        sendMessages(channel, "hi i am here");
    } catch (error) {
        console.error("Error processing message event:", error);
    }
});

 async function sendMessages(channel, message) {
    console.log(web); // Log the web object to check if it's defined
    await web.chat.postMessage({
        channel: channel,
        text: message,
    });
}