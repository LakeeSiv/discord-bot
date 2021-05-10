module.exports = (data) => {
  return JSON.stringify(data, null, 2).replace(/["{},]/g, "");
};
