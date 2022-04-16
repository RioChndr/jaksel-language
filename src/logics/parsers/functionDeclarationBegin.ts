import type { Command } from "../parsers.types";

/**
 *
 * @param test
 * @returns
 *
 * @description describe it here
 *
 *
 */
function functionDeclarationBegin(test: string): Command {
  const format = /so about (\w+)((\s\w+)*)?/;
  const match = test.match(format);
  if (!match) return null;

  const [, funcName, paramNames] = match;
  const params = paramNames?.trim().split(/\s+/) ?? [];
  const paramsStringified = params.reduce((p, c, idx, arr) => (idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`), "").trim();
  return {
    exp: `function ${funcName}(${paramsStringified})`,
    openGroup: true,
  };
}

export default functionDeclarationBegin;
