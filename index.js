import dotenv from "dotenv";
dotenv.config();
import Discord from "discord.js";
const client = new Discord.Client();
import command from "./command";

import { mute, unmute, help, github, mcname } from "./commands";
import userStats from "./commands/hypixelAPI/stats";

client.on("ready", () => {
  console.log("Logged in");

  mute(client);
  unmute(client);
  help(client);
  github(client);
  mcname(client);
  userStats(client);
});

client.login(process.env.TOKEN);
