const command = require("../command");
const usernames = require("../constants/usernames");

const { code } = require("../colors");

module.exports = (client) => {
  command(client, "mcname", (message) => {
    const { member, content, channel, mentions } = message;

    const syntax = "!mcname <@discordUser>";
    const splitContent = content.trim().split(" ");
    const mentionID = splitContent[1].slice(0, -1).substring(3);
    const discordName = mentions.users.first().username;
    const IGN = usernames[mentionID];

    channel.send(code(`@${discordName}'s IGN is ${IGN}`));
  });
};
