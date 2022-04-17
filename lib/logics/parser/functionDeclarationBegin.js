/**
 * @param msg {string}
 * note: function name must be alphabet followed by optional alphanumeric [A-Za-z0-9] or underscore (_)
 */
const functionDeclarationBegin = (msg) => {
  let format = /so about (\w+)((\s\w+)*)?/;
  let match = msg.match(format);
  if (!match) return null;

  const [, funcName, paramNames] = match;
  const params = paramNames?.trim().split(/\s+/) ?? [];
  const paramsStringified = params
    .reduce(
      (p, c, idx, arr) => (idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`),
      ""
    )
    .trim();
  return {
    exp: `function ${funcName}(${paramsStringified})`,
    openGroup: true,
  };
};

module.exports = functionDeclarationBegin;
