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
function finallyFunction(test: string): Command {
  const format = /yaudahlahya/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `finally`,
    closeGroup: true,
    openGroup: true,
  };
}

export default finallyFunction;
