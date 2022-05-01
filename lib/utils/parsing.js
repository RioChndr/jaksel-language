const { getCmd } = require("../logics");

function parsing(input) {
  if (input) {
    const cmdLines = input.split("\n").filter((v) => !!v);
    const cmds = getCmd(cmdLines);
    return cmds;
  } else {
    return;
  }
}

module.exports = parsing;
