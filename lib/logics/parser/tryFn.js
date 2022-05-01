const tryFn = (msg) => {
  let format = /trust issue/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `try {`,
  };
};

module.exports = tryFn;
