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
function catchFunction(test: string): Command {
  const format = /backstab/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `catch`,
    closeGroup: true,
    openGroup: true,
  };
}

export default catchFunction;
