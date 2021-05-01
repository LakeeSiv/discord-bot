const Discord = require("discord.js");
const command = require("../command");

module.exports = (client) => {
  command(client, "github", (message) => {
    const logo = "https://www.pngarts.com/files/8/Github-Logo-PNG-Download-Image.png"

    const text = new Discord.MessageEmbed()
    .setTitle("Github Link")
    .setURL("https://github.com/LakeeSiv/discordMCBot")
    .setThumbnail(logo)

    message.channel.send(text);
  });
};
