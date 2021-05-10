// to make sure this mute command works make sure to
// assgin the bot a role which has permissions to mute and deafen users

const command = require("../command");
const { green, red } = require("../colors");

module.exports = (client) => {
  command(client, "mute-basil", (message) => {
    const { member } = message;
    const target = process.env.BAS_ID;
    // const target = process.env.LAKEE_ID;
    const allowed_users = [
      process.env.LAKEE_ID,
      process.env.HAR_ID,
      process.env.TEST_ID,
    ];
    let found = false;

    if (allowed_users.includes(member.id)) {
      let members = message.channel.members;
      members.forEach((member) => {
        if (member.id === target) {
          member.voice.setMute(true);
          found = true;
        }
      });
      if (!found) {
        message.channel.send(red("Basil was not found"));
      } else {
        message.channel.send(green(process.env.BAS_MUTE_MESSAGE));
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
