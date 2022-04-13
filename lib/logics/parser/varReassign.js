const valueTransform = require("../../utils/valueTransform");

const varReassign = (msg) => {
  let format = /whichis ([a-zA-Z0-9]+) itu ([^\[\]\(\)\n]+)/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `${match[1]} = ${valueTransform(match[2])};`,
  };
};

module.exports = varReassign;
