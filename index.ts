import { config } from "dotenv";
config();
import Discord from "discord.js";
import { help, github, mute, unmute } from "./commands";

const client: Discord.Client = new Discord.Client();
// require("dotenv").config();
// const Discord = require("discord.js");
// const client = new Discord.Client();
// const command = require("./command");

// const { mute, unmute, help, github, mcname } = require("./commands");
// const userStats = require("./commands/hypixelAPI/stats")

client.on("ready", () => {
  console.log("Logged in");

  mute(client);
  unmute(client);
  help(client);
  // github(client);
  // mcname(client);
  // userStats(client);
});

client.login(process.env.TOKEN);
