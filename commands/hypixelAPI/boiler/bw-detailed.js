const { code } = require("../../../colors");
const json2string = require("../json2string");

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
BEDS: ${json2string(beds)}\n\
SOLOS: ${json2string(solo)}\n\
DOUBLES: ${json2string(doubles)}\n\
THREES: ${json2string(threes)}\n\
FOURS: ${json2string(fours)}\n\
\
\
`;
  return code(text);
};
