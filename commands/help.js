const command = require("../command");

const text =
  "```\n\
-------------------------------------------------------------------------------------------------\n\
!help                  : brings up this help message\n\n\
-------------------------------------------------------------------------------------------------\n\
!github                : returns an embeded link to the github repo\n\n\
-------------------------------------------------------------------------------------------------\n\
!mcname <@name>        : tag someone on discord with this command to find their IGN\n\n\
-------------------------------------------------------------------------------------------------\n\
!mute-basil            : this command will server mute basil\n\n\
                           permissions: Lakee, Harley\n\n\
-------------------------------------------------------------------------------------------------\n\
!unmute-basil          : unmutes basil from a server mute\n\n\
                           permissions: Everyone but basil\n\n\
-------------------------------------------------------------------------------------------------\n\
!stats <options> <IGN> : returns stats for the player depending on options\n\n\
     options available : \n\
                        user         : gives general info about users\n\
                        bw           : few bedwars stats\n\
                        bw-detailed  : detailed bedwars stats\n\
\n\n\
-------------------------------------------------------------------------------------------------\n\
MINECRAFT BOT BY LAKEE SIVARAYA\n\
github: https://github.com/LakeeSiv/discordMCBot\n\
-------------------------------------------------------------------------------------------------\n\
```\
";

module.exports = (client) => {
  command(client, "help", (message) => {
    message.channel.send(text);
  });
};
