const { code } = require("../../../colors");

module.exports = (data) => {
  const { nickname, level, rank, firstLogin, karma, history } = data;

  const dashes = "-".repeat(nickname.length);
  const text = `\n\
BEDWARS STATS FOR : ${nickname}\            
--------------------${dashes}\n\
LEVEL: ${level}\n\
RANK: ${rank}\n\
KARMA: ${karma}\n\
FIRST_LOGIN: ${firstLogin}\n\
NAME_HISTORY: [${history}]\n\
\
`;
  return code(text);
};
