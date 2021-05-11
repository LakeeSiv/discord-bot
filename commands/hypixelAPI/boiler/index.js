const user = require("./user");
const bw = require("./bw");
const bw_detailed = require("./bw-detailed");
const sw = require("./sw");

const boilers = {
  user,
  bw,
  bw_detailed,
  sw,
};

module.exports = boilers;
