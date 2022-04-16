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
function conditionElse(test: string): Command {
  const format = /kalogak$/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `else`,
    closeGroup: true,
    openGroup: true,
  };
}

export default conditionElse;
