const getData = require("./getData")
const command = require("../../command");

module.exports = async (client) => {
    command(client, "userStats", async (message) => {
    
    const {content, channel} = message
    const splitContent = content.trim().split(" ");

    const data = await getData(splitContent[1])

    channel.send(data.level);
  });
};

