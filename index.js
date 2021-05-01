require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const command = require("./command");
const mute = require("./commands/mute");
const unmute = require("./commands/unmute");
const help = require("./commands/help");
const github = require("./commands/github");
const mcname = require("./commands/mcname");
// const mcname = require("./constants/mcname")


client.on("ready", () => {
  console.log("Logged in");

  mute(client);
  unmute(client);
  help(client);
  github(client);
  mcname(client);

  // console.log(usernames)
});

client.login(process.env.TOKEN);
