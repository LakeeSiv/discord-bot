const getData = require("./getData")
const command = require("../../command");
const { red } = require("../../colors");


module.exports = async (client) => {
    command(client, "stats", async (message) => {
    
    const {content, channel} = message
    const splitContent = content.trim().split(" ");
    const option = splitContent[1]

    const data = await getData(splitContent[2])

    if (!(data)) {
      channel.send(red("Error player not found"))
    }
    var text = "Game option not found"
    switch (option){
    case "user":
      channel.send(data.level, splitContent[1]);
      break;
    }
  });
};

