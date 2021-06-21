import command from "../helpers/command";
import { green, red } from "../helpers/colors";
import {
  Client,
  GuildChannel,
  GuildChannelManager,
  GuildMember,
  TextChannel,
} from "discord.js";
import sleep from "../helpers/sleep";

const carousel_basil = (client: Client) => {
  command(client, "carousel-basil", async (message) => {
    const target: string = process.env.BAS_ID as string;

    let targetMemember: null | GuildMember = null;

    const channelMembers = (message.channel as TextChannel).members;

    channelMembers!.forEach((member) => {
      if (member.id === mentionID) {
        targetMemember = member;
      }
    });
    const channels: (string | null)[] = [];

    const ChannelManager: GuildChannelManager = message.guild
      ?.channels as GuildChannelManager;

    ChannelManager.cache.forEach((c: GuildChannel) => {
      if (c.type === "voice") {
        channels.push(c.id);
      }
    });

    for (let i = 1; i < 5; i++) {
      for (let channel of channels) {
        targetMemember!.voice.setChannel(channel);
        await sleep(600);
      }
    }
  });
};

export default carousel_basil;
