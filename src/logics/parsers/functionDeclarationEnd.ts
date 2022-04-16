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
function functionDeclarationEnd(test: string): Command {
  const format = /thats it sih/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: "",
    closeGroup: true,
  };
}

export default functionDeclarationEnd;
