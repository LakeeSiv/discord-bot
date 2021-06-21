// to make sure this mute command works make sure to
// assgin the bot a role which has permissions to mute and deafen users
import command from "../helpers/command";
import { green, red } from "../helpers/colors";
import { Client, TextChannel } from "discord.js";

const mute = (client: Client) => {
  command(client, "mute-basil", (message) => {
    const { member } = message;
    const target: string | undefined = process.env.BAS_ID;
    // const target = process.env.LAKEE_ID;
    const allowed_users: (string | undefined)[] = [
      process.env.LAKEE_ID,
      process.env.HAR_ID,
      process.env.TEST_ID,
      process.env.DAN_ID,
    ];
    let found: boolean = false;

    if (allowed_users.includes(member!.id)) {
      const textchannel: TextChannel = message.channel as TextChannel;
      let members = textchannel.members;
      members!.forEach((member) => {
        if (member.id === target) {
          member.voice.setMute(true);
          found = true;
        }
      });
      if (!found) {
        message.channel.send(red("Basil was not found"));
      } else {
        message.channel.send(green(process.env.BAS_MUTE_MESSAGE as string));
      }
    } else {
      message.channel.send(
        red(
          "you do not have permisson to do that\n Only Lakee and Harley have permissions to do this command"
        )
      );
    }
  });
};

export default mute;
