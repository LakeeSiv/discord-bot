import command from "../helpers/command";
import { green, red } from "../helpers/colors";
import {
  Client,
  GuildChannel,
  GuildChannelManager,
  GuildMember,
  TextChannel,
} from "discord.js";

const carousel = (client: Client) => {
  command(client, "carousel", (message) => {
    const { member } = <{ member: GuildMember }>message;
    //     const target: string = process.env.BAS_ID as string;
    const target = process.env.LAKEE_ID;
    const channels: (string | null)[] = [];

    const ChannelManager: GuildChannelManager = message.guild
      ?.channels as GuildChannelManager;

    ChannelManager.cache.forEach((c: GuildChannel) => {
      if (c.type === "voice") {
        channels.push(c.id);
      }
    });

    console.log(channels);
  });
};

export default carousel;
