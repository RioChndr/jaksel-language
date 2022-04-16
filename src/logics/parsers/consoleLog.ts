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
function consoleLog(test: string): Command {
  const format = /spill (.*)/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `console.log(${match[1]});`,
  };
}

export default consoleLog;
