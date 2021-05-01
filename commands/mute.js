const command = require("../command");

module.exports = (client) => {
  command(client, "mute-basil", (message) => {
    const { member } = message;
    const target = process.env.BAS_ID;
    const allowed_users = [process.env.LAKEE_ID, process.env.HAR_ID];
    let found = false;

    if (allowed_users.includes(member.id)) {
      message.channel.send(process.env.BAS_MUTE_MESSAGE);
      let members = message.channel.members;
      members.forEach((member) => {
        if (member.id === target) {
          member.voice.setMute(true);
          found = true;
        }
      });
      if (!found) {
        message.channel.send("Basil was not found");
      }
    } else {
      console.log("you do not have permisson to do that");
    }
  });
};
