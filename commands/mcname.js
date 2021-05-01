const command = require("../command");
const { green, red } = require("../colors");

module.exports = (client) => {
  command(client, "username", (message) => {
    const { member, content, channel, mentions } = message;

    const syntax = "!mcname <@discordUser>"
    const split = content.trim().split()

  });
};
