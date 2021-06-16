import { Player } from "hypixel-api-reborn";
import { code } from "../../helpers/colors";
import json2string from "../json2string";

const bw_detailed = (data: Player) => {
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
  } = data!.stats!.bedwars!;

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

export default bw_detailed;
