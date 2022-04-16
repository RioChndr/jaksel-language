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
function functionCall(test: string): Command {
  const format = /call (\w+)((\s\w+)*)?/;
  const match = test.match(format);
  if (!match) return null;

  const [, funcName, paramValues] = match;

  const params = paramValues?.trim().split(/\s+/) ?? [];
  const paramsStringified = params.reduce((p, c, idx, arr) => (idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`), "").trim();

  return {
    exp: `${funcName}(${paramsStringified});`,
  };
}

export default functionCall;
