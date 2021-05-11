const getData = require("./getData");
const command = require("../../command");
const { red } = require("../../colors");
const { user, bw, bw_detailed, sw } = require("./boiler");

module.exports = async (client) => {
  command(client, "stats", async (message) => {
    const { content, channel } = message;
    const splitContent = content.trim().split(" ");
    const option = splitContent[1];

    const data = await getData(splitContent[2]);

    if (!data) {
      channel.send(red("Error player not found"));
      return;
    }
    var text = "Game option not found";
    switch (option) {
      case "user":
        channel.send(user(data));
        break;
      case "bw":
        channel.send(bw(data));
        break;
      case "bw-detailed":
        channel.send(bw_detailed(data));
        break;
      case "sw":
        channel.send(sw(data));
        break;
      default:
        channel.send(red("Invalid option"));
    }
  });
};
