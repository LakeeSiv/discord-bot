const command = require("../command");

const text =
  "```\n\
!help         : brings up this help message\n\n\
!mute-basil   : this command will server mute basil\n\
                    permissions: Lakee, Harley\n\n\
!unmute-basil : unmutes basil from a server mute\n\
                    permissions: Everyone\n\n\n\n\
--------------------------------------------------\n\
MINECRAFT BOT BY LAKEE SIVARAYA\n\
github: https://github.com/LakeeSiv/discordMCBot\n\
--------------------------------------------------\n\
```\
";

module.exports = (client) => {
  command(client, "help", (message) => {
    message.channel.send(text);
  });
};
