import command from "../helpers/command";
import { green, red } from "../helpers/colors";
import { Client, GuildMember, TextChannel } from "discord.js";

const unmute = (client: Client) => {
  command(client, "unmute-basil", (message) => {
    const { member } = <{ member: GuildMember }>message;
    const target: string = process.env.BAS_ID as string;
    // const target = process.env.LAKEE_ID;
    let found: boolean = false;

    if (member.id !== target || member.id == process.env.LAKEE_ID) {
      let members = (message.channel as TextChannel).members;
      members.forEach((member: GuildMember) => {
        if (member.id === target) {
          member.voice.setMute(false);
          found = true;
        }
      });
      if (!found) {
        message.channel.send(red("Basil is not in the chat"));
      } else {
        message.channel.send(green("Successfully unmuted basil"));
      }
    } else {
      message.channel.send(red("lol basil is not allowed to unmute himself"));
    }
  });
};

export default unmute;
