import { Client } from "discord.js";
import command from "../helpers/command";
const text: string =
  "```\n\
\n\
!help                  : brings up this help message\n\n\
\n\
!github                : returns an embeded link to the github repo\n\n\
\n\
!mute-basil            : this command will server mute basil\n\n\
                           permissions: Lakee, Harley, Dan\n\n\
\n\
!unmute-basil          : unmutes basil from a server mute\n\n\
                           permissions: Everyone but basil\n\n\
\n\
!carousel-basil        : puts basil into a carousel\n\n\
                           permissions: Everyone\n\n\
\n\
!carousel <@tag> <delay (s)> <cycles>\n\n\
                      : puts the tagged person into a carousel with variables\n\n\
                           permissions: Lakee\n\n\
\n\
!stats <options> <IGN> : returns stats for the player depending on\n\
                         options\n\n\
     options available : \n\
                    user         : gives general info about users\n\
                    bw           : few bedwars stats\n\
                    bw-detailed  : detailed bedwars stats\n\
                    sw           : few skywars stats\n\
                    sw-detailed  : detailed skywars stats\n\
\
\n\n\
\n\
MINECRAFT BOT BY LAKEE SIVARAYA\n\
github: https://github.com/LakeeSiv/discordMCBot\n\
\n\
```\
";

const help = (client: Client) => {
  command(client, "help", (message) => {
    message.channel.send(text);
  });
};

export default help;
