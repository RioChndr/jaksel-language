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
function throwError(test: string): Command {
  const format = /toxic (.*)/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `throw new Error(${match[1]});`,
  };
}

export default throwError;
