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

  const text = `\n\
-------------------------------------------------------------------------------------------------\n\
                               BEDWARS STATS FOR : ${nickname}            
-------------------------------------------------------------------------------------------------\n\
LEVEL: ${level}\n\
PLAYED_GAMES: ${playedGames}\n\
WINS/LOSSES: ${wins}/${losses} = ${WLRatio} \n\
KILLS: ${kills}\n\
FINAL_KILLS: ${finalKills}\n\
DEATHS: ${deaths}\n\
FINAL_DEATHS: ${finalDeaths}\n\
KD_RATIO: ${KDRatio}\n\
BEDS: ${JSON.stringify(beds,null, 2)}\n\
SOLOS: ${JSON.stringify(solo,null, 2)}\n\
DOUBLES: ${JSON.stringify(doubles,null, 2)}\n\
THREES: ${JSON.stringify(threes,null, 2)}\n\
FOURS: ${JSON.stringify(fours,null, 2)}\n\
\
\
`;
  return code(text);
};
