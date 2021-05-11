const { code } = require("../../../colors");

module.exports = (data) => {
  const { nickname } = data;
  const {
    level,
    playedGames,
    wins,
    losses,
    WLRatio,
    kills,
    finalKills,
    deaths,
    finalDeaths,
    beds,
    KDRatio,
    avg,
    solo,
    doubles,
    threes,
    fours,
  } = data.stats.bedwars;

  const dashes = "-".repeat(nickname.length);
  const text = `\n\
BEDWARS STATS FOR : ${nickname}\            
--------------------${dashes}\n\
LEVEL: ${level}\n\
PLAYED_GAMES: ${playedGames}\n\
WINS/LOSSES: ${wins}/${losses} = ${WLRatio} \n\
KILLS: ${kills}\n\
FINAL_KILLS: ${finalKills}\n\
DEATHS: ${deaths}\n\
FINAL_DEATHS: ${finalDeaths}\n\
KD_RATIO: ${KDRatio}\n\
\
\
`;
  return code(text);
};
