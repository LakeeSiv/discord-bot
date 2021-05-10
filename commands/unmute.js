const command = require("../command");
const { green, red } = require("../colors");

module.exports = (client) => {
  command(client, "unmute-basil", (message) => {
    const { member } = message;
    const target = process.env.BAS_ID;
    let found = false;

    if (member.id !== target || member.id == process.env.LAKEE_ID) {
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
    } else {
      message.channel.send(red("lol basil is not allowed to unmute himself"));
    }
  });
};
