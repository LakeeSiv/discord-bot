require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const command = require("./command");

client.on("ready", () => {
  console.log("Logged in");

  command(client, "mutebasil", (message) => {
    const { member } = message;

    if (member.id === process.env.LAKEE_ID) {
      message.channel.send(process.env.BAS_MUTE_MESSAGE);
    } else {
      console.log("you do not have permisson to do that");
    }
  });
});

client.login(process.env.TOKEN);
