const user = require("./user");
const bw = require("./bw");
const bw_detailed = require("./bw-detailed");
const sw = require("./sw");
const sw_detailed = require("./sw-detailed");

const boilers = {
  user,
  bw,
  bw_detailed,
  sw,
  sw_detailed,
};

module.exports = boilers;
