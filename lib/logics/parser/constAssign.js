const valueTransform = require("../../utils/valueTransform");

const constAssign = (msg) => {
  let format = /seriously ([a-zA-Z0-9]+) itu ([^\[\]\(\)\n]+)/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `const ${match[1]} = ${valueTransform(match[2])};`,
  };
};

module.exports = constAssign;
