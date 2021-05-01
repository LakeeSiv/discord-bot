require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const command = require("./command");

client.on("ready", () => {
  console.log("Logged in");

  command(client, "mutebasil", (message) => {
    message.channel.send(process.env.BAS_MUTE_MESSAGE);
  });
});

client.login(process.env.TOKEN);
