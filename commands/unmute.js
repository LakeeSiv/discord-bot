const command = require("../command");
const { green, red } = require("../colors");

module.exports = (client) => {
  command(client, "unmute-basil", (message) => {
    const { member } = message;
    const target = process.env.BAS_ID;
    const allowed_users = [process.env.LAKEE_ID, process.env.HAR_ID];
    let found = false;

    let members = message.channel.members;
    members.forEach((member) => {
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
  });
};
