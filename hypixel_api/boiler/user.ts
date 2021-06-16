import { code } from "../../helpers/colors";
import { Player } from "hypixel-api-reborn";

const user = (data: Player) => {
  const { nickname, level, rank, firstLogin, karma, history } = data;

  const dashes: string = "-".repeat(nickname.length);
  const text: string = `\n\
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

export default user;
