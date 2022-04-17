const valueTransform = require("../../utils/valueTransform");

const varAssign = (msg) => {
  let format = /literally ([a-zA-Z0-9]+) itu ([^\[\]\(\)\n]+)/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `let ${match[1]} = ${valueTransform(match[2])};`,
  };
};

module.exports = varAssign;
