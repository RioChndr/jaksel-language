const conditionElse = (msg) => {
  let format = /kalogak(.*)/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `} else {`,
  };
};

module.exports = conditionElse;
