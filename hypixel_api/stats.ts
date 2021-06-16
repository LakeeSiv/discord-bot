import getData from "./getData";
import command from "../helpers/command";
import { red } from "../helpers/colors";
import { user, bw, bw_detailed, sw, sw_detailed } from "./boiler";
import { Client } from "discord.js";

const stats = async (client: Client) => {
  command(client, "stats", async (message) => {
    const { content, channel } = message;
    const splitContent = content.trim().split(" ");
    const option = splitContent[1];

    const data = await getData(splitContent[2]);

    if (!data) {
      channel.send(red("Error player not found"));
      return;
    }
    var text = "Game option not found";
    switch (option) {
      case "user":
        channel.send(user(data));
        break;
      case "bw":
        channel.send(bw(data));
        break;
      case "bw-detailed":
        channel.send(bw_detailed(data));
        break;
      case "sw":
        channel.send(sw(data));
        break;
      case "sw-detailed":
        channel.send(sw_detailed(data));
        break;
      default:
        channel.send(red("Invalid option"));
    }
  });
};

export default stats;
