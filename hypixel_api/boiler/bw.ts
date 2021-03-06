import { Player } from "hypixel-api-reborn";
import { code } from "../../helpers/colors";

const bw = (data: Player) => {
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
    KDRatio,
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
\
\
`;
  return code(text);
};

export default bw;
