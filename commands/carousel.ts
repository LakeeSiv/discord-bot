import command from "../helpers/command";
import { green, red } from "../helpers/colors";
import {
  Client,
  GuildChannelManager,
  GuildMember,
  TextChannel,
} from "discord.js";

const carousel = (client: Client) => {
  command(client, "carousel", (message) => {
    const { member } = <{ member: GuildMember }>message;
    //     const target: string = process.env.BAS_ID as string;
    const target = process.env.LAKEE_ID;
    const Channels: GuildChannelManager = message.guild
      ?.channels as GuildChannelManager;
    //@ts-ignore
    Channels.cache.forEach((a) =>
      console.log(a, "\n ------------------------")
    );
  });
};

export default carousel;
