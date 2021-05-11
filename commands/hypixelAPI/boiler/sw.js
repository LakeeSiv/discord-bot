const { code } = require("../../../colors");
const json2string = require("../json2string");

module.exports = (data) => {
  const { nickname } = data;
  const { level, kills, losses, wins, deaths, solo, team, ranked } =
    data.stats.skywars;

  const dashes = "-".repeat(nickname.length);
  const text = `\n\
SKYWARS STATS FOR : ${nickname}\n\
--------------------${dashes}\n\
LEVEL: ${level}\n\
WINS/LOSSES: ${wins}/${losses} = ${Math.round((wins / losses) * 100) / 100} \n\
KILLS/DEATHS: ${kills}/${deaths} = ${
    Math.round((kills / deaths) * 100) / 100
  } \n\n\
`;
  return code(text);
};
