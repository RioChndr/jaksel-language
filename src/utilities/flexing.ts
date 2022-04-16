import { getCommands } from "../logics";

function flexing(input: string) {
  return getCommands(input.split("\n").filter((v) => !!v));
}

export default flexing;
