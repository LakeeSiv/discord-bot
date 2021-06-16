const json2string = (data: object) => {
  return JSON.stringify(data, null, 2).replace(/["{},]/g, "");
};

export default json2string;
