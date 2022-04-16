import type { Command } from "../logics/parsers.types";

import commandsStringify from "./commandsStringify";

const execCommands = (cmds: Command[]) => {
  const stringified = commandsStringify(cmds);

  // console.log(stringified); // DEV ONLY

  eval(stringified);
};

export default execCommands;
