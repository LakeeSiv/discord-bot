import Discord, { Client, MessageEmbed } from "discord.js";
import command from "../helpers/command";

const github = (client: Client) => {
  command(client, "github", (message) => {
    const logo: string =
      "https://www.pngarts.com/files/8/Github-Logo-PNG-Download-Image.png";

    const text: MessageEmbed = new Discord.MessageEmbed()
      .setTitle("Github Link")
      .setURL("https://github.com/LakeeSiv/discordMCBot")
      .setThumbnail(logo);

    message.channel.send(text);
  });
};

export default github;
