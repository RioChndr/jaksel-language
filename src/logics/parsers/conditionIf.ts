import type { Command } from "../parsers.types";

import { operatorMap, valueReplacements } from "../parsers.utilities";

/**
 *
 * @param test
 * @returns
 *
 * @description describe it here
 *
 *
 */
function conditionIf(test: string): Command {
  const format = /kalo ([a-zA-Z0-9]+) ([a-zA-Z ]+) ([^\[\]\(\)\n]+)/;
  const match = test.match(format);
  if (!match) return null;
  if (match[2]) {
    match[2] = operatorMap[match[2] as keyof typeof operatorMap]; //maybe return undefined
  }

  return {
    exp: `if (${match[1]} ${match[2]} ${valueReplacements(match[3])})`,
    openGroup: true,
  };
}

export default conditionIf;
