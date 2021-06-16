const json2string = (data: JSON) => {
  return JSON.stringify(data, null, 2).replace(/["{},]/g, "");
};

export default json2string;
