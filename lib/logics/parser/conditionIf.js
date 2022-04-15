const valueTransform = require("../../utils/valueTransform");
const mapCompare = require("../../utils/mapCompare");

const conditionIf = (msg) => {
  let format = /kalo ([a-zA-Z0-9]+) ([a-zA-Z ]+) ([^\[\]\(\)\n]+)/;
  let match = msg.match(format);
  if (!match) return null;
  if (match[2]) {
    match[2] = mapCompare[match[2]];
  }

  return {
    exp: `if (${match[1]} ${match[2]} ${valueTransform(match[3])})`,
    openGroup: true,
  };
};

module.exports = conditionIf;
