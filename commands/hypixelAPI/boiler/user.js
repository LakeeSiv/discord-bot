
const { code } = require("../../../colors");

module.exports = (data) => {

    const {nickname, level, rank, firstLogin, karma, history } = data

const text =
  `\n\
-------------------------------------------------------------------------------------------------\n\
                                   STATS FOR : ${nickname}            
-------------------------------------------------------------------------------------------------\n\
LEVEL: ${level}\n\
RANK: ${rank}\n\
KARMA: ${karma}\n\
FIRST_LOGIN: ${firstLogin}\n\
NAME_HISTORY: [${history}]\n\
\
`;
    return code(text)
};