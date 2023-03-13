/**
 * @param msg {string}
 * note: function name must be alphabet followed by optional alphanumeric [A-Za-z0-9] or underscore (_)
 */
export default function functionDeclarationAsyncBegin(msg: string) {
  const format = /overthinking (\w+)((\s\w+)*)?/;
  const match = msg.match(format);
  if (!match) return null;

  const [, funcName, paramNames] = match;
  const params = paramNames?.trim().split(/\s+/) ?? [];
  const paramsStringified = params
    .reduce(
      (p, c, idx, arr) => (idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`),
      ''
    )
    .trim();
  return {
    exp: `async function ${funcName}(${paramsStringified})`,
    openGroup: true
  };
}
