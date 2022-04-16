import parsers from "./parsers";

function getCommands(lines: string[]) {
  return lines
    .map((line) => {
      for (const parser of parsers) {
        let command = parser(line);
        if (command) return command;
      }
      return null;
    })
    .filter(Boolean);
}

export { getCommands };
