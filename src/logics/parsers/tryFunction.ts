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
function tryFunction(test: string): Command {
  const format = /trust issue/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `try`,
    openGroup: true,
  };
}

export default tryFunction;
