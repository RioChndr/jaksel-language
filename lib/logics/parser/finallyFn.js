const finallyFn = (msg) => {
  let format = /yaudahlahya/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `} finally {`,
  };
};

module.exports = finallyFn;
