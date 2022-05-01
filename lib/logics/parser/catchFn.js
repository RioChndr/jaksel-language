const catchFn = (msg) => {
  let format = /backstab/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `} catch {`,
  };
};

module.exports = catchFn;
