const { getCmds } = require("../logics");

function flexing(input) {
  const cmdLines = input.split("\n").filter((v) => !!v);
  return getCmds(cmdLines);
}

module.exports = flexing;
