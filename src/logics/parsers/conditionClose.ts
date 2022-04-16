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
function conditionClose(test: string): Command {
  const format = /udahan$/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: ``,
    closeGroup: true,
  };
}

export default conditionClose;
