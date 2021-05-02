require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const command = require("./command");

const { mute, unmute, help, github, mcname } = require("./commands");

client.on("ready", () => {
  console.log("Logged in");

  mute(client);
  unmute(client);
  help(client);
  github(client);
  mcname(client);
});

client.login(process.env.TOKEN);
