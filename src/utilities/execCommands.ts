import type { Command } from "../logics/parsers.types";

import commandsToString from "./commandsToString";

const execCommands = (cmds: Command[]) => {
  const stringified = commandsToString(cmds);

  // console.log(stringified); // DEV ONLY

  eval(stringified);
};

export default execCommands;
