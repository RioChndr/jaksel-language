const { commandStringify, parsing } = require("../../lib/utils");

const getJsFormat = (input) => {
  const cmd = parsing(input);
  return commandStringify(cmd);
};

module.exports = getJsFormat;
