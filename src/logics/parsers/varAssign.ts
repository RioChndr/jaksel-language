import type { Command } from "../parsers.types";

import { valueReplacements } from "../parsers.utilities";

/**
 *
 * @param test
 * @returns
 *
 * @description describe it here
 *
 *
 */
function varAssign(test: string): Command {
  const format = /literally ([a-zA-Z0-9]+) itu ([^\[\]\(\)\n]+)/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `let ${match[1]} = ${valueReplacements(match[2])};`,
  };
}

export default varAssign;
