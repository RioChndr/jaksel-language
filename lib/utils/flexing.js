const { getCmd } = require("../logics");

function flexing(input) {
  const cmdLines = input.split("\n").filter((v) => !!v);
  const cmds = getCmd(cmdLines);

  return cmds;
}

module.exports = flexing;
