const prefix = "!";

module.exports = (client, alias, callback) => {
  const command = `${prefix}${alias}`;
  client.on("message", (message) => {
    const { content } = message;

    if (content.startsWith(`${command}`) || content === command) {
      console.log(`Executing ${command}`);
      callback(message);
    }
  });
};
