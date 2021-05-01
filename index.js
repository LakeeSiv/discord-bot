require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const command = require("./command");
const mute = require("./commands/mute");

client.on("ready", () => {
  console.log("Logged in");

  mute(client);
});

client.login(process.env.TOKEN);
