require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const command = require("./command");
const mute = require("./commands/mute");
const unmute = require("./commands/unmute");
const help = require("./commands/help");


client.on("ready", () => {
  console.log("Logged in");

  mute(client);
  unmute(client);
  help(client);
});

client.login(process.env.TOKEN);
