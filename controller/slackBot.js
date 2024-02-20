const { RTMClient} = require("@slack/rtm-api");
const {WebClient}=require("@slack/web-api")

const dotenv = require("dotenv").config();

const rtm = new RTMClient(process.env.SLACK_OATH_TOKEN);
const web = new WebClient(process.env.SLACK_OATH_TOKEN)

rtm.start().catch(console.error)

rtm.on("message", async (event) => {
    try {    
        let channel =  event.channel;
        let text = event.text;
        if(event.username!=="test_1"){
            sendMessages(channel, "hi i am here");
        }
        
    } catch (error) {
        console.error("Error processing message event:", error);
    }
});

 async function sendMessages(channel, message) {
    await web.chat.postMessage({
        channel: channel,
        text: message,
    });
}
module.exports=rtm