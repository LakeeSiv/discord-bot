const command = require("../command");


module.exports = (client) => {
    command(client, "mutebasil", (message) => {
        const { member } = message;
    
        if (member.id === process.env.LAKEE_ID) {
          message.channel.send(process.env.BAS_MUTE_MESSAGE);
        } else {
          console.log("you do not have permisson to do that");
        }
      });
}