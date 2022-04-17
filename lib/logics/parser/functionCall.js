/**
 * @param msg {string}
 */
const functionCall = (msg) => {
  let format = /call (\w+)((\s\w+)*)?/;
  let match = msg.match(format);
  if (!match) return null;

  const [, funcName, paramValues] = match;

  const params = paramValues?.trim().split(/\s+/) ?? [];
  const paramsStringified = params
    .reduce(
      (p, c, idx, arr) => (idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`),
      ""
    )
    .trim();

  return {
    exp: `${funcName}(${paramsStringified});`,
  };
};

module.exports = functionCall;
