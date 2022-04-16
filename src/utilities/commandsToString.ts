import type { Command } from "../logics/parsers.types";

const commandsToString = (commands: Command[]) => {
  let result = "";

  let isOpenGroup = false;
  for (const command of commands) {
    if (command !== null) {
      let tempRes = command.exp;
      if (command.closeGroup) {
        tempRes = "} " + tempRes;
        isOpenGroup = false;
      }
      if (command.openGroup) {
        tempRes = tempRes + " {";
        isOpenGroup = true;
      }
      result += tempRes + "\n";
    }
  }

  if (isOpenGroup) {
    result += " }";
  }

  return result;
};

export default commandsToString;
