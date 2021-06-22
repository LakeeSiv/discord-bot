import command from "../helpers/command";
import { green, red } from "../helpers/colors";
import {
  Client,
  GuildChannel,
  GuildChannelManager,
  GuildMember,
  TeamMember,
  TextChannel,
} from "discord.js";
import sleep from "../helpers/sleep";

const carousel = (client: Client) => {
  command(client, "carousel", async (message) => {
    const { content, mentions, member } = message;

    const splitContent: string[] = content.trim().split(" ");
    const mentionID: string = splitContent[1].slice(0, -1).substring(3);
    const delay: number = parseFloat(splitContent[2]);
    const loops: number = parseInt(splitContent[3]);

    let targetMemember: null | GuildMember = null;
    let targetChannel: null | string = null;

    const channelMembers = (message.channel as TextChannel).members;

    channelMembers!.forEach((member) => {
      if (member.id === mentionID) {
        targetMemember = member;
        try {
          targetChannel = member.voice.channel!.id;
        } catch (error) {
          message.channel.send(red("error person not found"));
        }
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

    if (member!.id === process.env.LAKEE_ID) {
      for (let i = 0; i < loops; i++) {
        for (let channel of channels) {
          await targetMemember!.voice.setChannel(channel);
          await sleep(delay * 1000);
        }
      }
      targetMemember!.voice.setChannel(targetChannel);
      message.channel.send(green("Carousel Finished"));
    } else {
      message.channel.send(red("You do not have permission to do that"));
    }
  });
};

export default carousel;
