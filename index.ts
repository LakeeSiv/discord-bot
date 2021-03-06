import { config } from "dotenv";
config();
import Discord from "discord.js";
import {
  help,
  github,
  mute,
  unmute,
  carousel,
  carousel_basil,
} from "./commands";
import stats from "./hypixel_api/stats";

const client: Discord.Client = new Discord.Client();

client.on("ready", () => {
  console.log("Logged in");

  mute(client);
  unmute(client);
  help(client);
  github(client);
  stats(client);
  carousel(client);
  carousel_basil(client);
});

client.login(process.env.TOKEN);
