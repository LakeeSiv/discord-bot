const green = (text) => {
  return "```diff\n+" + text + "\n```";
};
const red = (text) => {
  return "```diff\n-" + text + "\n```";
};
const code = (text) => {
  return "```\n" + text + "\n```";
};
exports.green = green;
exports.red = red;
exports.code = code;

